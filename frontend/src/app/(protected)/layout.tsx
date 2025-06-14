import { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Input } from "@/components/ui/input";

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
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <div className="flex flex-col h-screen">
              <header className="sticky top-0 flex shrink-0 items-center gap-2 border-b p-4">
                <SidebarTrigger className="-ml-1" />
                <Input placeholder="Search..." className="w-200 mx-2" />
              </header>
              <div className="flex-1 overflow-y-auto">{children}</div>
            </div>
          </SidebarInset>
        </SidebarProvider>
      </ThemeProvider>
    </main>
  );
}
