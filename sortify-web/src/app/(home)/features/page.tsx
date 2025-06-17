import {
  Mail,
  FolderOpen,
  Zap,
  Shield,
  Settings,
  Globe,
  Smartphone,
  Cog,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features",
  description: "Features of Sortify",
};

export default function FeaturesPage() {
  const features = [
    {
      icon: Mail,
      title: "Email Provider Support",
      description:
        "Currently supports Gmail with more providers coming soon. Secure OAuth 2.0 integration ensures your credentials stay safe.",
      badge: "Gmail Ready",
    },
    {
      icon: FolderOpen,
      title: "Smart Folder System",
      description:
        "Create unlimited custom folders with detailed descriptions. The more context you provide, the better Sortify performs.",
      badge: "Unlimited",
    },
    {
      icon: Zap,
      title: "LLM-Powered Sorting",
      description:
        "Advanced language models analyze email content and context to make intelligent sorting decisions.",
      badge: "AI-Powered",
    },
    {
      icon: Shield,
      title: "Privacy & Security",
      description:
        "Your emails are processed securely with encryption. No data is stored.",
      badge: "Secure",
    },
    {
      icon: Settings,
      title: "Customizable Rules",
      description:
        "Fine-tune sorting behavior with descriptions. Tell Sortify how you want your inbox to be organized using plain text.",
      badge: "Flexible",
    },
    {
      icon: Globe,
      title: "Multi-Language Support",
      description:
        "Sortify understands emails in multiple languages, making it perfect for international communication. No need to fear language barriers.",
      badge: "Global",
    },
    {
      icon: Smartphone,
      title: "Mobile Friendly",
      description:
        "Access and manage your organized inbox from any device with our responsive web interface.",
      badge: "Responsive",
    },
    {
      icon: Cog,
      title: "Constantly Improving",
      description:
        "We are constantly improving Sortify to make it the best email organizer out there. We are always looking for feedback and suggestions to improve the product.",
      badge: "Improving",
    },
  ];
  return (
    <main>
      <div className="px-4 py-16 items-center justify-center">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Features</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover all the powerful features that make Sortify the smartest
              way to organize your inbox.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <IconComponent className="h-10 w-10 text-primary mb-2" />
                      <Badge variant="secondary">{feature.badge}</Badge>
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Coming Soon</CardTitle>
                <CardDescription className="text-base">
                  We&apos;re constantly working on new features to make your
                  email experience even better.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="space-y-1">
                    <h4 className="font-medium">More Email Providers</h4>
                    <p className="text-muted-foreground">
                      Outlook, Yahoo, and custom IMAP support
                    </p>
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-medium">Advanced Analytics</h4>
                    <p className="text-muted-foreground">
                      Insights into your email patterns and productivity
                    </p>
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-medium">Team Collaboration</h4>
                    <p className="text-muted-foreground">
                      Shared folders and team-wide sorting rules
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
