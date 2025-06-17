"use client";

import { HelpCircle, Inbox, MessageCircle } from "lucide-react";

import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";

import { ModeToggle } from "@/components/theme-toggle";
import { useAuth } from "@/hooks/use-auth";
import Image from "next/image";

const navMain = [
  {
    title: "Inbox Management",
    url: "/inbox",
    icon: Inbox,
  },
  {
    title: "Make Suggestions",
    url: "/suggestions",
    icon: MessageCircle,
  },
  {
    title: "Support",
    url: "/support",
    icon: HelpCircle,
  },
];

export function AppSidebar() {
  const { user } = useAuth();

  return (
    <Sidebar
      collapsible="icon"
      className="flex flex-col h-screen border-r justify-between"
    >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild className="md:h-8 md:p-0">
              <Link href="/inbox">
                {user?.email == "040508wyx@gmail.com" ||
                user?.email == "yxwang58@bu.edu" ||
                user?.email == "anhminhle402@gmail.com" ? (
                  <>
                    <div className="text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                      <Image
                        src="/icons/eira.svg"
                        alt="Sortify"
                        width={30}
                        height={30}
                      />
                    </div>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-medium">
                        Love you Eira
                      </span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="bg-black dark:bg-white text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                      <Image
                        src="/icons/sortify.png"
                        alt="Sortify"
                        width={30}
                        height={30}
                      />
                    </div>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-medium">Sortify</span>
                    </div>
                  </>
                )}
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="flex-1 overflow-y-auto">
        <SidebarGroup>
          <SidebarGroupContent className="px-1.5 md:px-0">
            <SidebarMenu>
              {navMain.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <Link href={item.url}>
                    <SidebarMenuButton
                      tooltip={{
                        children: item.title,
                        hidden: false,
                      }}
                      className="px-2.5 md:px-2 cursor-pointer"
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="hidden md:block">
          <ModeToggle />
        </div>
        <div className="flex flex-row gap-2 items-center">
          {user && <NavUser {...user} />}
          <div className="block md:hidden">
            <ModeToggle />
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
