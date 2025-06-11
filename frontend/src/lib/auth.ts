"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function signup(data: {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}) {
  const { email, password, firstName, lastName } = data;
  const supabase = await createClient();
  const { data: userData, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      data: {
        display_name: `${firstName} ${lastName}`,
      },
      // TODO: Change to URL as needed
      emailRedirectTo: "http://localhost:3000/signin",
    },
  });
  if (error) {
    return {
      success: false,
      error: error.message || "Signup failed",
    };
  }
  if (userData?.user?.identities?.length === 0) {
    return {
      success: false,
      error: "Account already exists",
    };
  }
  return {
    success: true,
    message: "Check your email for verification",
  };
}

export async function signin(data: { email: string; password: string }) {
  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword(data);
  if (error) {
    return {
      success: false,
      error: error.message || "Signin failed",
    };
  }
  revalidatePath("/dashboard");
  redirect("/dashboard");
}

export async function getCurrentUser(): Promise<{
  id: string | undefined;
  email: string | undefined;
  name: string | undefined;
}> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const id = user?.id;
  const email = user?.email;
  const name = user?.user_metadata.display_name;

  return { id, email, name };
}

export async function getToken(): Promise<string | undefined> {
  const supabase = await createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();
  return session?.access_token;
}
