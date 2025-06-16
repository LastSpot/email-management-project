import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-black/10 px-6 py-16 text-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="text-3xl font-bold tracking-tight mb-6 md:mb-0">
            Sortify
          </div>
          <div className="flex gap-8">
            <Link
              href="#"
              className="text-sm font-medium hover:text-black/70 transition-colors"
            >
              About
            </Link>
            <Link
              href="/privacy"
              className="text-sm font-medium hover:text-black/70 transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-sm font-medium hover:text-black/70 transition-colors"
            >
              Terms
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:text-black/70 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="border-t border-black/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-black/60 mb-4 md:mb-0">
            © 2025 Sortify. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
