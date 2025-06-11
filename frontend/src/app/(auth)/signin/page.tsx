import Link from "next/link";
import SigninForm from "@/components/auth/signin-form";
import { Header } from "@/components/header";

export default function SigninPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header
        showBackButton={true}
        rightContent={
          <div className="flex flex-row items-center gap-2">
            <div className="hidden md:flex text-sm text-muted-foreground gap-1">
              Don&apos;t have an account?{" "}
              <Link
                href="/signup"
                className="font-medium text-foreground hover:underline"
              >
                Sign up
              </Link>
            </div>
          </div>
        }
      />

      <div className="px-6 py-16 text-foreground">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Welcome Back</h1>
            <p className="text-muted-foreground text-lg">
              Sign in to your Aspira account
            </p>
          </div>

          <SigninForm />

          <div className="md:hidden mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              New to Aspira?{" "}
              <Link
                href="/signup"
                className="font-medium text-foreground hover:underline"
              >
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
