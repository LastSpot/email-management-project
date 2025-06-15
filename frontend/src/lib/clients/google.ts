import { google } from "googleapis";
import { getProviderTokens } from "@/lib/auth";

function createOAuth2Client() {
  return new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID!,
    process.env.GOOGLE_CLIENT_SECRET!
  );
}

async function getGoogleClient() {
  const oauth2Client = createOAuth2Client();
  const { accessToken, refreshToken } = await getProviderTokens();

  if (!refreshToken) {
    throw new Error("No refresh token available for Google OAuth2 client");
  }

  oauth2Client.setCredentials({
    access_token: accessToken,
    refresh_token: refreshToken,
  });

  return oauth2Client;
}

export async function getGmailClient() {
  const auth = await getGoogleClient();
  return google.gmail({ version: "v1", auth });
}
