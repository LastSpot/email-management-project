import { createClient } from "@/lib/supabase/client";
import { getURL } from "./helper";

export async function signout() {
  const supabase = createClient();
  await supabase.auth.signOut();
}

export async function googleSignin() {
  const url = getURL();
  const supabase = createClient();
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${url}/api/auth/callback?next=/inbox`,
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
