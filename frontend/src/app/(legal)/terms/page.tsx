import { Navigation } from "@/components/home/navigation";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { Footer } from "@/components/home/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aspira | Terms of Service",
};

export default function TermsPage() {
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
            <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
            <p className="text-black/70">Last Updated: May 28, 2025</p>
          </div>

          <div className="prose prose-lg max-w-none text-black/80">
            <p>
              These Terms of Service (&quot;Terms&quot;) govern your access to
              and use of the Aspira platform, including our website, services,
              and applications (collectively, the &quot;Platform&quot;). Please
              read these Terms carefully before using our Platform. By accessing
              or using the Platform, you agree to be bound by these Terms.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">
              1. Acceptance of Terms
            </h2>
            <p>
              By registering for and/or using the Platform in any manner, you
              agree to these Terms and all other operating rules, policies, and
              procedures that may be published by Aspira, which are incorporated
              by reference.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">2. Eligibility</h2>
            <p>
              You must be ID verified to use the Platform. By using the
              Platform, you represent and warrant that you meet all eligibility
              requirements. Aspira may, in its sole discretion, refuse to offer
              access to or use of the Platform to any person or entity and
              change its eligibility criteria at any time.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">
              3. Registration and Account Security
            </h2>
            <p>
              To use certain features of the Platform, you must register for an
              account. You agree to provide accurate, current, and complete
              information during the registration process and to update such
              information to keep it accurate, current, and complete.
            </p>
            <p className="mt-4">
              You are responsible for safeguarding your account and for all
              activities that occur under your account. You agree to notify
              Aspira immediately of any unauthorized use of your account.
            </p>

            <Separator className="my-10" />

            <h2 className="text-2xl font-bold mt-10 mb-4">
              4. Verification Process
            </h2>
            <p>
              Aspira is an exclusive platform that requires all users to
              complete a verification process. This process may include:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>
                Identity verification using government-issued identification
              </li>
              <li>Biometric verification</li>
              <li>Professional credential verification</li>
              <li>Background checks</li>
            </ul>
            <p>
              You consent to Aspira collecting, storing, and processing this
              information for verification purposes. We reserve the right to
              deny or revoke access to the Platform based on the results of the
              verification process.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">
              5. Platform Rules and Conduct
            </h2>
            <p>When using the Platform, you agree not to:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Violate any applicable law or regulation</li>
              <li>Impersonate any person or entity</li>
              <li>Harass, abuse, or harm another person</li>
              <li>Interfere with or disrupt the Platform</li>
              <li>Attempt to gain unauthorized access to the Platform</li>
              <li>Use the Platform for any illegal or unauthorized purpose</li>
              <li>Engage in any fraudulent activity</li>
              <li>
                Share contact information outside of the Platform&apos;s
                designated processes
              </li>
              <li>
                Record sessions without explicit consent from all participants
              </li>
              <li>Share confidential information disclosed during sessions</li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-4">
              6. Booking and Payment Terms
            </h2>
            <p>
              When booking sessions through the Platform, you agree to pay all
              applicable fees. Payments are processed securely through our
              third-party payment processors.
            </p>
            <p className="mt-4">
              Cancellation Policy: You may cancel a session up to 24 hours
              before the scheduled time for a full refund. Cancellations within
              24 hours of the scheduled session may be subject to a cancellation
              fee.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">
              7. Intellectual Property Rights
            </h2>
            <p>
              The Platform and its original content, features, and functionality
              are owned by Aspira and are protected by international copyright,
              trademark, patent, trade secret, and other intellectual property
              or proprietary rights laws.
            </p>

            <Separator className="my-10" />

            <h2 className="text-2xl font-bold mt-10 mb-4">8. Termination</h2>
            <p>
              We may terminate or suspend your account and access to the
              Platform immediately, without prior notice or liability, for any
              reason, including if you breach these Terms.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">
              9. Disclaimer of Warranties
            </h2>
            <p>
              The Platform is provided on an &quot;AS IS&quot; and &quot;AS
              AVAILABLE&quot; basis. Aspira expressly disclaims all warranties
              of any kind, whether express or implied, including but not limited
              to the implied warranties of merchantability, fitness for a
              particular purpose, and non-infringement.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">
              10. Limitation of Liability
            </h2>
            <p>
              In no event shall Aspira be liable for any indirect, incidental,
              special, consequential, or punitive damages, including loss of
              profits, data, or other intangible losses, resulting from your
              access to or use of or inability to access or use the Platform.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">11. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with
              the laws of [Jurisdiction], without regard to its conflict of law
              provisions.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">
              12. Changes to Terms
            </h2>
            <p>
              We reserve the right to modify or replace these Terms at any time.
              If a revision is material, we will provide at least 30 days&apos;
              notice prior to any new terms taking effect.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">13. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at{" "}
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
            <Link href="/privacy">
              <Button className="border-2 border-black bg-white text-black hover:bg-black hover:text-white cursor-pointer">
                View Privacy Policy
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
