import { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import ProtectedHeader from "@/components/protected/protected-header";

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
        {/* Header */}
        <ProtectedHeader />
        {/* Main Content */}
        {children}
      </ThemeProvider>
    </main>
  );
}
