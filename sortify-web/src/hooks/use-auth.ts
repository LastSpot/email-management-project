"use client";

import { useState, useEffect } from "react";
import { User } from "@/lib/types";
import { createClient } from "@/lib/supabase/client";

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const supabase = createClient();

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user: userData },
      } = await supabase.auth.getUser();
      if (userData) {
        setUser({
          id: userData.id,
          email: userData.email || "",
          name: userData.user_metadata.full_name,
          avatar: userData.user_metadata.avatar_url,
        });
      } else {
        setUser(null);
      }
    };
    fetchUser();
  });

  return { user };
};
