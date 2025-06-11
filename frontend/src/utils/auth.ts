import { createClient } from "@/lib/supabase/client";

export async function signout() {
  const supabase = createClient();
  await supabase.auth.signOut();
}
