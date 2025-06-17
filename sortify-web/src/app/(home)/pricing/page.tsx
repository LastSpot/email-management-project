import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Shield, Heart } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Pricing of Sortify",
};

export default function PricingPage() {
  const features = [
    "Connect your email account",
    "Create unlimited custom folders",
    "AI-powered email sorting",
    "Privacy-first processing",
    "Mobile-responsive interface",
    "Secure OAuth authentication",
    "Multi-language email support",
  ];
  return (
    <main className="px-4 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Pricing</h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Simple. Transparent. Free — now and always.
          </p>
        </div>

        {/* Main Pricing Card */}
        <div className="max-w-lg mx-auto mb-16">
          <Card className="relative border-2 border-primary/20 shadow-lg">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-primary text-primary-foreground px-4 py-1 text-sm font-medium">
                No trial. No upgrade required.
              </Badge>
            </div>

            <CardHeader className="text-center pt-8">
              <CardTitle className="text-3xl font-bold mb-2">
                Free Forever
              </CardTitle>
              <div className="mb-4">
                <span className="text-6xl font-bold">$0</span>
                <span className="text-2xl text-muted-foreground ml-2">
                  forever
                </span>
              </div>
              <CardDescription className="text-lg">
                All current features. Unlimited usage. No credit card required.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <Button size="lg" className="w-full" asChild>
                <Link href="/get-started">Get Started for Free</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Reassurance Section */}
        <div className="text-center mb-12">
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="flex items-center justify-center space-x-2 text-muted-foreground">
              <Shield className="h-5 w-5" />
              <span className="text-sm">
                No hidden fees • No time limits • No feature restrictions
              </span>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              As new features are added, some may be part of future paid plans —
              but everything you use today will stay free forever.
            </p>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="text-center">
            <CardHeader>
              <Heart className="h-8 w-8 text-primary mx-auto mb-2" />
              <CardTitle className="text-lg">Built with Love</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                We believe email organization should be accessible to everyone,
                not just those who can afford it.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
              <CardTitle className="text-lg">Privacy First</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Your emails are processed securely and never stored. We make
                money through optional premium features (coming soon), not your
                data.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Check className="h-8 w-8 text-primary mx-auto mb-2" />
              <CardTitle className="text-lg">No Commitment</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Start using Sortify immediately. No account setup fees, no
                monthly charges, no contracts to sign.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="max-w-2xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Why is Sortify completely free?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We believe everyone deserves an organized inbox. Our current
                  features solve the core email organization problem, and we
                  want to make them accessible to all users without barriers.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Will you ever charge for current features?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Never. Everything available today will remain free forever.
                  Future premium features will be entirely new capabilities that
                  enhance the core experience.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  What might future paid features include?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Potential premium features could include advanced email
                  automation, analytics, team collaboration tools, or
                  integrations with productivity apps. But core email sorting
                  will always be free.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
