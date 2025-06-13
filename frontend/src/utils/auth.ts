import { createClient } from "@/lib/supabase/client";

export async function signout() {
  const supabase = createClient();
  await supabase.auth.signOut();
}

export async function googleSignin() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: "http://localhost:3000/callback?next=/inbox",
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
  console.log("data", data);
}
