"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";
import { Header } from "@/components/header";

import { ModeToggle } from "@/components/theme-toggle";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signout } from "@/utils/auth";

export default function ProtectedHeader() {
  return (
    <Header
      showLogo={true}
      logoHref="/dashboard"
      rightContent={
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost">
                <Settings className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuLabel>Settings</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                {/* Account */}
                <DropdownMenuItem asChild className="cursor-pointer">
                  <Link href="/account">Account</Link>
                </DropdownMenuItem>
                {/* Billing */}
                <DropdownMenuItem asChild className="cursor-pointer">
                  <Link href="/billing">Billing</Link>
                </DropdownMenuItem>
                {/* Settings */}
                <DropdownMenuItem asChild className="cursor-pointer">
                  <Link href="/settings">Settings</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                {/* Logout */}
                <DropdownMenuItem
                  onClick={async () => {
                    await signout();
                  }}
                  className="cursor-pointer"
                >
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <ModeToggle />
        </div>
      }
    />
  );
}
