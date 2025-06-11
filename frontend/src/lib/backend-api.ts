"use server";

import { getToken } from "./auth";

const api = process.env.BACKEND_API_URL;

export async function authorizedFetch(
  endpoint: string,
  init: Omit<RequestInit, "headers"> = {}
): Promise<Response> {
  if (!api) {
    return new Response(JSON.stringify({ error: "API URL is not set" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  const token = await getToken();
  // ensure no double-slashes
  const url = `${api.replace(/\/+$/, "")}/${endpoint.replace(/^\/+/, "")}`;

  const headers = new Headers();
  headers.set("Content-Type", "application/json");
  if (token) headers.set("Authorization", `Bearer ${token}`);

  return fetch(url, {
    ...init,
    headers,
  });
}
