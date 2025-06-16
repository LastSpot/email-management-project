import { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

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
        <SidebarProvider open={false}>
          <AppSidebar />
          <SidebarInset>
            <div className="flex flex-col h-screen">
              <header className="sticky top-0 grid grid-cols-3 items-center border-b md:border-none p-2">
                <div>
                  <SidebarTrigger className="md:hidden" />
                </div>
                <div className="flex md:hidden items-center gap-2 justify-self-center">
                  <h1 className="text-2xl font-bold">Sortify</h1>
                </div>
                <div />
              </header>
              <div className="flex-1 overflow-y-auto">{children}</div>
            </div>
          </SidebarInset>
        </SidebarProvider>
      </ThemeProvider>
    </main>
  );
}
