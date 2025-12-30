'use server';

import { createClient } from '@/lib/supabase/server';

export async function getCurrentUser() {
	const supabase = await createClient();
	const {
		data: { user },
	} = await supabase.auth.getUser();

	const id: string = user?.id || '';
	const email: string = user?.email || '';
	const name: string = user?.user_metadata.full_name || '';
	const avatar: string = user?.user_metadata.avatar_url || '';

	return { id, email, name, avatar };
}

export async function getProviderTokens() {
	const supabase = await createClient();
	const {
		data: { user },
	} = await supabase.auth.getUser();

	if (!user?.id) {
		return {
			accessToken: null,
			refreshToken: null,
		};
	}

	const { data, error } = await supabase
		.from('mail_accounts')
		.select('access_token, refresh_token')
		.eq('user_id', user.id)
		.maybeSingle();

	if (error) {
		console.error('Error fetching provider tokens:', error);
		return {
			accessToken: null,
			refreshToken: null,
		};
	}

	if (!data) {
		return {
			accessToken: null,
			refreshToken: null,
		};
	}

	return {
		accessToken: data?.access_token,
		refreshToken: data?.refresh_token,
	};
}
