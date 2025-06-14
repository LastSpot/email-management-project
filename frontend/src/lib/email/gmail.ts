"use server";

import { getProviderToken } from "@/lib/auth";

function decodeBase64Url(str: string): string {
  // Convert URL-safe chars back to standard Base64
  const base64 = str.replace(/-/g, "+").replace(/_/g, "/");
  // Decode
  return Buffer.from(base64, "base64").toString("utf-8");
}

function extractNameOrEmail(from: string) {
  if (!from) {
    return "Unknown Sender";
  }
  // Match "Name <email@domain.com>"
  const match = from.match(/^(.*?)\s*<(.+?)>$/);
  if (match) {
    // If name exists and is not empty, return it; otherwise, return the email
    return match[1].trim() || match[2];
  }
  // If no match, just return the string (likely just the email)
  return from;
}

function formatEmailDate(dateString?: string) {
  if (!dateString) return "Unknown Date";

  try {
    const date = new Date(dateString);
    return date.toLocaleString(undefined, {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch (error) {
    return dateString; // fallback to original if parsing fails
  }
}

export async function fetchUnreadGmailMessages() {
  const token = await getProviderToken();
  const url = new URL(
    "https://gmail.googleapis.com/gmail/v1/users/me/messages?maxResults=500"
  );
  url.searchParams.set("q", "in:inbox is:unread");
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  if (!data.messages) {
    return [];
  }
  const messages = await Promise.all(
    data.messages.map((message: any) => getPreview(message.id))
  );
  return messages;
}

export async function fetchLatestGmailMessages() {
  const token = await getProviderToken();
  const url = new URL(
    "https://gmail.googleapis.com/gmail/v1/users/me/messages?maxResults=100"
  );
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  if (!data.messages) {
    return [];
  }
  const messages = await Promise.all(
    data.messages.map((message: any) => getPreview(message.id))
  );
  return messages;
}

async function getPreview(id: any) {
  const token = await getProviderToken();
  const url = new URL(
    `https://gmail.googleapis.com/gmail/v1/users/me/messages/${id}?format=full`
  );
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  const headers: Record<string, string> = {};
  if (data.payload && Array.isArray(data.payload.headers)) {
    for (const h of data.payload.headers) {
      headers[h.name.toLowerCase()] = h.value;
    }
  }
  return {
    id: data.id,
    threadId: data.threadId,
    labels: data.labelIds,
    from: extractNameOrEmail(headers["from"]),
    snippet: data.snippet,
    subject: headers["subject"],
    date: headers["date"],
  };
}

export async function getFullMessage(id: any) {
  const token = await getProviderToken();
  const url = new URL(
    `https://gmail.googleapis.com/gmail/v1/users/me/messages/${id}?format=full`
  );
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();

  const headers: Record<string, string> = {};
  if (data.payload?.headers) {
    for (const h of data.payload.headers) {
      headers[h.name.toLowerCase()] = h.value;
    }
  }

  let bodyData = "";
  let isHtml = false;

  if (data.payload?.parts) {
    const htmlPart = data.payload.parts.find(
      (p: any) => p.mimeType === "text/html"
    );
    if (htmlPart?.body?.data) {
      bodyData = htmlPart.body.data;
      isHtml = true;
    } else {
      const textPart = data.payload.parts.find(
        (p: any) => p.mimeType === "text/plain"
      );
      if (textPart?.body?.data) {
        bodyData = textPart.body.data;
      }
    }
  } else if (data.payload?.body?.data) {
    bodyData = data.payload.body.data;
    isHtml = data.payload.mimeType === "text/html";
  }

  let body = decodeBase64Url(bodyData);

  // If it's plain text, convert line breaks to HTML and make URLs clickable
  if (!isHtml && body) {
    // Convert URLs to clickable links
    const urlRegex = /(https?:\/\/[^\s\)]+)/g;
    body = body.replace(
      urlRegex,
      '<a href="$1" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">$1</a>'
    );
    // Convert line breaks to HTML breaks
    body = body.replace(/\n/g, "<br>");
  } else if (isHtml && body) {
    // For HTML emails, force all links to open in a new tab
    body = body.replace(/<a href/gi, '<a target="_blank" href');
  }

  return {
    id: data.id,
    threadId: data.threadId,
    labels: data.labelIds,
    from: headers["from"],
    to: headers["to"],
    snippet: data.snippet,
    subject: headers["subject"],
    date: formatEmailDate(headers["date"]),
    body,
    isHtml,
  };
}

export async function markAsRead(id: string) {
  const token = await getProviderToken();
  const url = new URL(
    `https://gmail.googleapis.com/gmail/v1/users/me/messages/${id}/modify`
  );
  const response = await fetch(url.toString(), {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      removeLabelIds: ["UNREAD"],
    }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    console.error("Failed to mark email as read:", errorData);
    throw new Error("Failed to mark email as read");
  }

  return await response.json();
}

export async function markAsUnread(id: string) {
  const token = await getProviderToken();
  const url = new URL(
    `https://gmail.googleapis.com/gmail/v1/users/me/messages/${id}/modify`
  );
  const response = await fetch(url.toString(), {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      addLabelIds: ["UNREAD"],
    }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    console.error("Failed to mark email as unread:", errorData);
    throw new Error("Failed to mark email as unread");
  }

  return await response.json();
}
