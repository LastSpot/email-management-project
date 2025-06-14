import { create } from "zustand";
import { Email } from "@/app/(protected)/inbox/page";

interface EmailState {
  emails: Email[];
  setEmails: (emails: Email[]) => void;
  markAsRead: (id: string) => void;
  markAsUnread: (id: string) => void;
}

export const useEmailStore = create<EmailState>((set) => ({
  emails: [],
  setEmails: (emails) => set({ emails }),
  markAsRead: (id) =>
    set((state) => ({
      emails: state.emails.map((email) =>
        email.id === id
          ? {
              ...email,
              labels: email.labels?.filter((label) => label !== "UNREAD"),
            }
          : email
      ),
    })),
  markAsUnread: (id) =>
    set((state) => ({
      emails: state.emails.map((email) =>
        email.id === id
          ? { ...email, labels: [...(email.labels || []), "UNREAD"] }
          : email
      ),
    })),
}));
