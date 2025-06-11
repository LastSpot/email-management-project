import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Logo from "@/components/logo";

interface HeaderProps {
  showBackButton?: boolean;
  backHref?: string;
  logoHref?: string;
  showLogo?: boolean;
  rightContent?: React.ReactNode;
  title?: string;
}

export function Header({
  showBackButton = false,
  backHref = "/",
  logoHref = "/",
  showLogo = true,
  rightContent,
}: HeaderProps) {
  return (
    <header className="border-b border-border px-6 py-4 bg-background/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          {showBackButton && (
            <Link
              href={backHref}
              className="hover:opacity-70 transition-opacity"
            >
              <ArrowLeft className="h-5 w-5 text-foreground" />
            </Link>
          )}
          <Link
            href={logoHref}
            className="text-2xl font-bold tracking-tight text-foreground cursor-pointer hover:opacity-90 transition-opacity"
          >
            {showLogo ? <Logo /> : null}
          </Link>
        </div>
        {rightContent}
      </div>
    </header>
  );
}
