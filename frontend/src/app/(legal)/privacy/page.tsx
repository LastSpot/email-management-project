import { Navigation } from "@/components/home/navigation";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { Footer } from "@/components/home/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aspira | Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navigation />

      <div className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-black/60 hover:text-black mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-black/70">Last Updated: May 28, 2025</p>
          </div>

          <div className="prose prose-lg max-w-none text-black/80">
            <p>
              At Aspira, we take your privacy seriously. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your
              information when you use our platform. Please read this privacy
              policy carefully. If you do not agree with the terms of this
              privacy policy, please do not access the platform.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">
              Information We Collect
            </h2>
            <p>
              We collect information that you provide directly to us when you
              register on our platform, create or modify your profile, and
              participate in interactive features.
            </p>

            <h3 className="text-xl font-bold mt-8 mb-3">
              Personal Information
            </h3>
            <p>We may collect the following personal information:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Professional information (job title, company, industry)</li>
              <li>
                Government-issued identification for verification purposes
              </li>
              <li>Biometric data for identity verification</li>
              <li>Payment information</li>
              <li>Profile photo</li>
              <li>Professional biography and credentials</li>
            </ul>

            <h3 className="text-xl font-bold mt-8 mb-3">Usage Information</h3>
            <p>
              We may also collect information about how you access and use our
              platform:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>
                Log data (IP address, browser type, pages visited, time spent)
              </li>
              <li>Device information</li>
              <li>Session activity and interactions</li>
              <li>Booking and meeting history</li>
            </ul>

            <Separator className="my-10" />

            <h2 className="text-2xl font-bold mt-10 mb-4">
              How We Use Your Information
            </h2>
            <p>
              We use the information we collect for various purposes, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Providing, maintaining, and improving our platform</li>
              <li>Processing transactions and sending related information</li>
              <li>Verifying your identity and preventing fraud</li>
              <li>Facilitating connections between members</li>
              <li>
                Sending administrative messages, updates, and security alerts
              </li>
              <li>Responding to your comments, questions, and requests</li>
              <li>Monitoring and analyzing trends, usage, and activities</li>
              <li>Personalizing your experience</li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-4">
              Information Sharing and Disclosure
            </h2>
            <p>
              We are committed to maintaining your trust, and we want you to
              understand when and with whom we may share the information we
              collect.
            </p>

            <h3 className="text-xl font-bold mt-8 mb-3">With Your Consent</h3>
            <p>
              We may share your information with third parties when you
              explicitly consent to such sharing. For example, when you agree to
              exchange contact information with another member after a session.
            </p>

            <h3 className="text-xl font-bold mt-8 mb-3">Service Providers</h3>
            <p>
              We may share your information with third-party vendors,
              consultants, and other service providers who need access to such
              information to carry out work on our behalf, such as payment
              processing, data analysis, email delivery, hosting services, and
              customer service.
            </p>

            <h3 className="text-xl font-bold mt-8 mb-3">Legal Requirements</h3>
            <p>
              We may disclose your information if we believe that such action is
              necessary to (a) comply with the law or legal process; (b) protect
              and defend our rights and property; (c) protect against misuse or
              unauthorized use of our platform; and (d) protect the personal
              safety or property of our users or the public.
            </p>

            <Separator className="my-10" />

            <h2 className="text-2xl font-bold mt-10 mb-4">Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to
              protect the security of your personal information. However, please
              be aware that no security measures are perfect or impenetrable,
              and we cannot guarantee the security of your data transmitted to
              our platform.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">
              Your Rights and Choices
            </h2>
            <p>You have several rights regarding your personal information:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>
                Access and update your information through your account settings
              </li>
              <li>Request deletion of your personal information</li>
              <li>Opt-out of marketing communications</li>
              <li>Request a copy of your personal data</li>
              <li>Object to the processing of your personal information</li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-4">
              International Data Transfers
            </h2>
            <p>
              Your information may be transferred to, and maintained on,
              computers located outside of your state, province, country, or
              other governmental jurisdiction where the data protection laws may
              differ from those in your jurisdiction.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">
              Changes to This Privacy Policy
            </h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page
              and updating the &quot;Last Updated&quot; date.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at{" "}
              <a
                href="mailto:contact@findaspira.com"
                className="text-black font-medium hover:underline"
              >
                contact@findaspira.com
              </a>{" "}
              or through our{" "}
              <Link
                href="/contact"
                className="text-black font-medium hover:underline"
              >
                contact page
              </Link>
              .
            </p>
          </div>

          <div className="mt-16 text-center">
            <Link href="/terms">
              <Button className="border-2 border-black bg-white text-black hover:bg-black hover:text-white cursor-pointer">
                View Terms of Service
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
