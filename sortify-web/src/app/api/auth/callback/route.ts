import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function GET(request: Request) {
	const { searchParams, origin } = new URL(request.url);
	const code = searchParams.get('code');
	let next = searchParams.get('next') ?? '/';
	if (!next.startsWith('/')) {
		next = '/';
	}

	if (code) {
		const supabase = await createClient();
		const { data, error } = await supabase.auth.exchangeCodeForSession(
			code
		);

		if (!error && data?.session) {
			const session = data.session;
			const user_id = session?.user.id;
			const provider = session?.user.app_metadata.provider;
			const accessToken = session?.provider_token;
			const refreshToken = session?.provider_refresh_token;
			const email = session?.user.email;
			const expiresAt = new Date(Date.now() + 3600 * 1000);

			const { error: mailAccountError } = await supabase
				.from('mail_accounts')
				.upsert(
					{
						user_id: user_id,
						provider: provider,
						access_token: accessToken,
						refresh_token: refreshToken,
						email_address: email,
						expires_at: expiresAt,
					},
					{
						onConflict: 'user_id',
					}
				)
				.select();
			if (mailAccountError) {
				console.error(mailAccountError);
			}
			const forwardedHost = request.headers.get('x-forwarded-host');
			const isLocalEnv = process.env.NODE_ENV === 'development';
			if (isLocalEnv) {
				return NextResponse.redirect(`${origin}${next}`);
			} else if (forwardedHost) {
				return NextResponse.redirect(`https://${forwardedHost}${next}`);
			} else {
				return NextResponse.redirect(`${origin}${next}`);
			}
		} else {
			return NextResponse.redirect(`${origin}/error`);
		}
	}

	return NextResponse.redirect(`${origin}/error`);
}
