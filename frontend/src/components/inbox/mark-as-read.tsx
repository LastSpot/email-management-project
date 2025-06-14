"use client";

import { useEffect } from "react";
import { markAsRead } from "@/lib/email/gmail";

export default function MarkAsRead({ id }: { id: string }) {
  useEffect(() => {
    const markEmailAsRead = async () => {
      try {
        await markAsRead(id);
      } catch (error) {
        console.error(error);
      }
    };

    markEmailAsRead();
  }, [id]);

  return null;
}
