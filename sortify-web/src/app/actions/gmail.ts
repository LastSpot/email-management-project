"use server";

import { getGmailClient } from "@/lib/clients/google";
import { formatLabelName } from "@/utils/helper";
import { gmail_v1 } from "googleapis";

function decodeBase64Url(str: string): string {
  const b64 = str.replace(/-/g, "+").replace(/_/g, "/");
  return Buffer.from(b64, "base64").toString("utf-8");
}

{
  /* Get ALL unread emails */
}
// export async function getUnreadEmails() {
//   const gmail = await getGmailClient();

//   // --- paginate through all unread messages ---
//   const allMessages: gmail_v1.Schema$Message[] = [];
//   let pageToken: string | undefined = undefined;

//   do {
//     const { data }: { data: gmail_v1.Schema$ListMessagesResponse } =
//       await gmail.users.messages.list({
//         userId: "me",
//         q: "is:unread",
//         maxResults: 500,
//         pageToken,
//       });

//     if (data.messages) {
//       allMessages.push(...data.messages);
//     }

//     pageToken = data.nextPageToken ?? undefined;
//   } while (pageToken);

//   if (allMessages.length === 0) return [];

//   // fetch message details in parallel
//   const detailed = await Promise.all(
//     allMessages.map((message) =>
//       gmail.users.messages.get({
//         userId: "me",
//         id: message.id!,
//         format: "full",
//       })
//     )
//   );

//   return detailed.map((r) => {
//     const msg = r.data;
//     const headers = Object.fromEntries(
//       (msg.payload?.headers ?? []).map((h) => [h.name?.toLowerCase(), h.value])
//     );

//     // find plain-text body part
//     let rawBody = "";
//     if (msg.payload?.parts) {
//       const part = msg.payload.parts.find((p) => p.mimeType === "text/plain");
//       rawBody = part?.body?.data ?? "";
//     } else {
//       rawBody = msg.payload?.body?.data ?? "";
//     }

//     const body = decodeBase64Url(rawBody);

//     return {
//       id: msg.id!,
//       threadId: msg.threadId!,
//       from: headers["from"] ?? "",
//       subject: headers["subject"] ?? "",
//       date: headers["date"] ?? "",
//       body,
//     };
//   });
// }

{
  /* Get at most 500 unread emails */
}
export async function getUnreadEmails() {
  const gmail = await getGmailClient();

  const { data }: { data: gmail_v1.Schema$ListMessagesResponse } =
    await gmail.users.messages.list({
      userId: "me",
      q: "is:unread",
      maxResults: 500,
    });

  const detailed = await Promise.all(
    (data.messages ?? []).map((message) =>
      gmail.users.messages.get({
        userId: "me",
        id: message.id!,
        format: "full",
      })
    )
  );

  return detailed.map((r) => {
    const msg = r.data;
    const headers = Object.fromEntries(
      (msg.payload?.headers ?? []).map(
        (h: gmail_v1.Schema$MessagePartHeader) => [
          h.name?.toLowerCase(),
          h.value,
        ]
      )
    );

    // find plain-text body part
    let rawBody = "";
    if (msg.payload?.parts) {
      const part = msg.payload.parts.find(
        (p: gmail_v1.Schema$MessagePart) => p.mimeType === "text/plain"
      );
      rawBody = part?.body?.data ?? "";
    } else {
      rawBody = msg.payload?.body?.data ?? "";
    }

    const body = decodeBase64Url(rawBody);

    return {
      id: msg.id!,
      threadId: msg.threadId!,
      from: headers["from"] ?? "",
      subject: headers["subject"] ?? "",
      date: headers["date"] ?? "",
      body,
    };
  });
}

export async function getLabels() {
  const gmail = await getGmailClient();
  const res = await gmail.users.labels.list({ userId: "me" });
  const labels = res.data.labels;
  const targetLabels = [];
  for (const label of labels ?? []) {
    const split = label.name?.split("-");
    if (split && split.length > 1) {
      if (split[0] === process.env.PREFIX) {
        targetLabels.push(label);
      }
    }
  }
  return targetLabels;
}

export async function createLabel(name: string) {
  const labelName = formatLabelName(name);
  const gmail = await getGmailClient();
  const response = await gmail.users.labels.create({
    userId: "me",
    requestBody: {
      name: labelName,
      labelListVisibility: "labelShow",
      messageListVisibility: "show",
    },
  });
  return response.data.id;
}

export async function updateGmailLabel(labelId: string, newName: string) {
  const labelName = formatLabelName(newName);
  const gmail = await getGmailClient();
  try {
    const res = await gmail.users.labels.patch({
      userId: "me",
      id: labelId,
      requestBody: {
        name: labelName,
        labelListVisibility: "labelShow",
        messageListVisibility: "show",
      },
    });
    return res.data;
  } catch (error) {
    console.error(error);
    throw new Error("Folder does not exist in Gmail");
  }
}

export async function deleteGmailLabel(labelId: string) {
  const gmail = await getGmailClient();
  try {
    await gmail.users.labels.delete({
      userId: "me",
      id: labelId,
    });
  } catch (error) {
    console.error(error);
  }
}

export async function addLabelToEmail(labelId: string, emailId: string) {
  const gmail = await getGmailClient();
  try {
    await gmail.users.messages.modify({
      userId: "me",
      id: emailId,
      requestBody: {
        addLabelIds: [labelId],
      },
    });
  } catch (error) {
    if (error instanceof Error && error.message.includes("404")) {
      console.info(
        `Label ${labelId} or email ${emailId} not found – skipping.`
      );
      return;
    }
    throw error;
  }
}
