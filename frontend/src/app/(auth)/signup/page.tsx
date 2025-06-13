import Link from "next/link";
import SignupForm from "@/components/auth/signup-form";
import { Header } from "@/components/header";

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header
        showBackButton={true}
        rightContent={
          <div className="flex flex-row items-center gap-2">
            <div className="hidden md:flex text-sm text-muted-foreground gap-1">
              Already have an account?{" "}
              <Link
                href="/signin"
                className="font-medium text-foreground hover:underline"
              >
                Sign in
              </Link>
            </div>
          </div>
        }
      />

      <div className="px-6 py-16 text-foreground">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Create Account</h1>
          </div>

          <SignupForm />

          <div className="mt-8 text-center flex flex-col gap-2 items-center justify-center">
            <div className="flex md:hidden text-sm text-muted-foreground gap-1">
              Already have an account?{" "}
              <Link
                href="/signin"
                className="font-medium text-foreground hover:underline"
              >
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
