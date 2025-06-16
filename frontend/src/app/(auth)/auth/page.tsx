import { Header } from "@/components/header";
import ProviderAuth from "@/components/auth/provider-auth";

export default function AuthPage() {
  return (
    <div className="min-h-screen">
      <Header showBackButton={true} />

      <div className="px-6 py-16 text-foreground">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Welcome</h1>
            <p className="text-muted-foreground text-lg">
              Sign in to your account
            </p>
          </div>

          <ProviderAuth />
        </div>
      </div>
    </div>
  );
}
