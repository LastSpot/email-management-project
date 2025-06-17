import { Shield, Zap, Users, Heart, Mail } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "About Sortify",
};

export default function AboutUsPage() {
  const values = [
    {
      icon: Shield,
      title: "Privacy First",
      description:
        "Your emails are your private communications. We process them securely and never store them permanently.",
    },
    {
      icon: Zap,
      title: "Simplicity",
      description:
        "Email organization should be effortless. We believe in powerful features with intuitive interfaces.",
    },
    {
      icon: Users,
      title: "User Control",
      description:
        "You decide how your emails are organized. No more blackbox AI email SaaS.",
    },
  ];

  return (
    <main className="px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About Sortify</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We&apos;re on a mission to make email management effortless for
            everyone, while keeping your privacy and control at the center of
            everything we do.
          </p>
        </div>

        {/* Mission Statement */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center space-x-2">
              <Heart className="h-6 w-6 text-primary" />
              <span>Our Mission</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Email has become overwhelming for millions of people worldwide. We
              believe that with the right combination of artificial intelligence
              and user control, we can transform the chaotic inbox into an
              organized, manageable communication hub. Sortify exists to give
              you back control over your digital communications, so you can
              focus on what truly matters.
            </p>
          </CardContent>
        </Card>

        {/* Values */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index}>
                  <CardHeader>
                    <IconComponent className="h-10 w-10 text-primary mb-2" />
                    <CardTitle>{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Founder Story */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">The Story Behind Sortify</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Sortify was born out of personal frustration with email overload.
              Like many professionals, our founder spent countless hours
              manually organizing emails, creating complex filter rules, and
              still feeling overwhelmed by an ever-growing inbox.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The breakthrough came when we realized that modern AI could
              understand email content and context in ways that traditional
              rule-based systems never could. But we also knew that privacy and
              user control had to be non-negotiable principles. $20 for an inbox
              management is ridiculous. That&apos;s why Sortify was born and
              it&apos;s free to use.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, Sortify represents our vision of intelligent email
              management: powerful AI that respects your privacy, learns your
              preferences, and always keeps you in control of your digital
              communications.
            </p>
          </CardContent>
        </Card>

        {/* Future Vision */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">Looking Forward</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We&apos;re just getting started. Our roadmap includes support for
              more email providers, advanced analytics to help you understand
              your communication patterns, and collaborative features for teams
              who want to organize their shared communications.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              But our core mission remains unchanged: making email management
              effortless while keeping your privacy and control paramount.
            </p>
          </CardContent>
        </Card>

        {/* Contact CTA */}
        <Card className="text-center">
          <CardHeader>
            <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
            <CardTitle className="text-2xl">Get in Touch</CardTitle>
            <CardDescription className="text-base">
              Have questions, suggestions, or need support? We&apos;d love to
              hear from you.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link href="/contact">Contact Support</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/contact">Share Feedback</Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              We typically respond within 24 hours and genuinely read every
              message.
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
