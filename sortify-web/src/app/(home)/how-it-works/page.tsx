import {
  Mail,
  FolderPlus,
  Search,
  Zap,
  CheckCircle,
  Lightbulb,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works",
  description: "How Sortify works",
};

export default function HowItWorksPage() {
  const steps = [
    {
      number: 1,
      icon: Mail,
      title: "Connect Your Email",
      description:
        "Securely link your email account using OAuth. We never store your sensitive login credentials.",
      details: [
        "One-click email integration",
        "Secure OAuth 2.0 authentication",
        "Revoke access anytime from your email account provider",
      ],
    },
    {
      number: 2,
      icon: FolderPlus,
      title: "Create Smart Folders",
      description:
        "Set up custom folders with detailed descriptions to help our AI understand your organization preferences.",
      details: [
        "Unlimited custom folders",
        "Add detailed descriptions for better accuracy",
        'Examples: "Work Projects", "Personal Finance", "Travel Plans"',
        "The more context, the better the sorting",
      ],
    },
    {
      number: 3,
      icon: Search,
      title: "Scan Your Inbox",
      description: "Effortlessly organize your inbox with one click.",
      details: [
        "Sortify will look through your unread emails and organize them into the folders you have created.",
      ],
    },
    {
      number: 4,
      icon: Zap,
      title: "AI-Powered Sorting",
      description:
        "Our advanced language model analyzes each email and suggests the best folder placement.",
      details: [
        "Sortify doesn't just read, it understands who sent what and why.",
        "Context-aware categorization",
        "Confidence scoring for each suggestion",
      ],
    },
  ];

  const tips = [
    {
      title: "Be Descriptive",
      description:
        'Use clear, detailed folder names and descriptions. Instead of "Work" in your description, try "Client communications and project updates". Be specific about what you want to organize.',
    },
    {
      title: "Start Small",
      description:
        "Begin with 3-5 main categories, then add more specific folders as needed.",
    },
    {
      title: "Follow the best email practices",
      description:
        "Imeplement inbox zero, 4D, and other best email practices to get the most out of Sortify.",
    },
    {
      title: "Use Examples",
      description:
        'Include example keywords in folder descriptions: "Newsletters - Marketing emails, updates from Medium, Substack, etc."',
    },
  ];

  return (
    <main>
      <div className="px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">How It Works</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get your inbox organized in four simple steps. Our AI does the
              heavy lifting while you stay in control.
            </p>
          </div>

          {/* Step-by-step flow */}
          <div className="space-y-8 mb-16">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <Card key={index} className="relative">
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                          {step.number}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <IconComponent className="h-6 w-6 text-primary" />
                          <CardTitle className="text-xl">
                            {step.title}
                          </CardTitle>
                        </div>
                        <CardDescription className="text-base">
                          {step.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pl-16">
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li
                          key={detailIndex}
                          className="flex items-start space-x-2 text-sm"
                        >
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Tips for best results */}
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Lightbulb className="h-6 w-6 text-primary" />
                <CardTitle className="text-2xl">
                  Tips for Best Results
                </CardTitle>
              </div>
              <CardDescription>
                Follow these best practices to get the most accurate email
                sorting results.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tips.map((tip, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline">{tip.title}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {tip.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-muted-foreground mb-6">
              Sortify is free to use. So what are you waiting for?
            </p>
            <Button size="lg" asChild>
              <Link href="/get-started">Start Organizing Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
