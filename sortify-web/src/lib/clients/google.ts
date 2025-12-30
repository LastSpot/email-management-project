import { google, Auth } from 'googleapis';
import { getProviderTokens } from '@/lib/auth';
import { getCurrentUser } from '@/lib/auth';

function createOAuth2Client() {
	return new google.auth.OAuth2(
		process.env.GOOGLE_CLIENT_ID!,
		process.env.GOOGLE_CLIENT_SECRET!
	);
}

// Implement a cache for the OAuth2 client
const clientCache = new Map<string, Auth.OAuth2Client>();

export async function getGmailClient() {
	const user = await getCurrentUser();
	if (!user?.id) {
		throw new Error('User not found. Please sign in.');
	}

	const { accessToken, refreshToken } = await getProviderTokens();
	if (!refreshToken) throw new Error('No refresh token');

	let auth = clientCache.get(user.id);
	if (!auth) {
		auth = createOAuth2Client();
		clientCache.set(user.id, auth);
	}

	auth.setCredentials({
		access_token: accessToken,
		refresh_token: refreshToken,
	});
	return google.gmail({ version: 'v1', auth });
}
