"use server";

import { getGmailClient } from "@/lib/clients/google";
import { formatLabelName } from "@/utils/helper";

function decodeBase64Url(str: string): string {
  const b64 = str.replace(/-/g, "+").replace(/_/g, "/");
  return Buffer.from(b64, "base64").toString("utf-8");
}

export async function getUnreadEmails() {
  const gmail = await getGmailClient();
  const res = await gmail.users.messages.list({
    userId: "me",
    q: "is:unread",
    maxResults: 500,
  });
  const messages = res.data.messages ?? [];

  const detailed = await Promise.all(
    messages.map((m) =>
      gmail.users.messages.get({
        userId: "me",
        id: m.id!,
        format: "full",
      })
    )
  );

  return detailed.map((r) => {
    const msg = r.data;
    const headers = Object.fromEntries(
      (msg.payload?.headers ?? []).map((h) => [h.name?.toLowerCase(), h.value])
    );
    // find body part
    let rawBody = "";
    if (msg.payload?.parts) {
      const part = msg.payload.parts.find((p) => p.mimeType === "text/plain");
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
  let targetLabels = [];
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
  } catch (error: any) {
    if (error?.code === 404 || error?.response?.status === 404) {
      console.info(
        `Label ${labelId} or email ${emailId} not found – skipping.`
      );
      return;
    }
    throw error;
  }
}
