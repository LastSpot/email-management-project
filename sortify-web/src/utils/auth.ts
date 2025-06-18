import { createClient } from "@/lib/supabase/client";

export async function signout() {
  const supabase = createClient();
  await supabase.auth.signOut();
}

export async function googleSignin() {
  const supabase = createClient();
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `https://sortifymail.com/api/auth/callback?next=/inbox`,
      scopes: "https://www.googleapis.com/auth/gmail.modify",
      queryParams: {
        access_type: "offline",
        prompt: "consent",
      },
    },
  });
  if (error) {
    console.error("Error signing in with Google:", error);
  }
}
