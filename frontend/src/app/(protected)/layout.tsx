import { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { InboxSidebar } from "@/components/inbox/inbox-sidebar";

export const metadata: Metadata = {
  title: "Name | Dashboard",
  description: "",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <InboxSidebar />
        {/* Main Content */}
        {children}
      </ThemeProvider>
    </main>
  );
}
