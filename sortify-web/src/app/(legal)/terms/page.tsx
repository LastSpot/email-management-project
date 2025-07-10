import { Navigation } from "@/components/home/navigation";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { Footer } from "@/components/home/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Sortify",
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
            <p className="text-black/70">Last Updated: June 16, 2025</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <p>
              These Terms of Service (&quot;Terms&quot;) govern your access to
              and use of the Sortify application, including our website,
              services, and applications (collectively, the
              &quot;application&quot;). Please read these Terms carefully before
              using our application. By accessing or using the application, you
              agree to be bound by these Terms.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">
              1. Acceptance of Terms
            </h2>
            <p>
              By registering for and/or using the application in any manner, you
              agree to these Terms and all other operating rules, policies, and
              procedures that may be published by Sortify, which are
              incorporated by reference.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">2. Eligibility</h2>
            <p>
              You must have a registered email provider account with one of our
              authentication providers. To see which providers we work with, see
              our authentication page. By using the application, you represent
              and warrant that you meet all eligibility requirements. Sortify
              may, in its sole discretion, refuse to offer access to or use of
              the application to any person or entity and change its eligibility
              criteria at any time.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">
              3. Registration and Account Security
            </h2>
            <p>
              To use certain features of the application, you must register for
              an email account. You agree to provide accurate, current, and
              complete information during the registration process and to update
              such information to keep it accurate, current, and complete.
            </p>
            <p className="mt-4">
              You are responsible for safeguarding your account and for all
              activities that occur under your account. You agree to notify
              Sortify immediately of any unauthorized use of your account.
            </p>
            <p className="mt-4">
              The use of raw or derived user data received from Workspace APIs
              will adhere to the Google User Data Policy, including the Limited
              Use requirements.
            </p>

            <Separator className="my-10" />

            <h2 className="text-2xl font-bold mt-10 mb-4">
              4. application Rules and Conduct
            </h2>
            <p>When using the application, you agree not to:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Violate any applicable law or regulation</li>
              <li>Impersonate any person or entity</li>
              <li>Harass, abuse, or harm another person</li>
              <li>Interfere with or disrupt the application</li>
              <li>Attempt to gain unauthorized access to the application</li>
              <li>
                Use the application for any illegal or unauthorized purpose
              </li>
              <li>Engage in any fraudulent activity</li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-4">
              5. Intellectual Property Rights
            </h2>
            <p>
              The application and its original content, features, and
              functionality are owned by the creator of{" "}
              <Link
                href="https://github.com/LastSpot"
                className="hover:underline hover:font-medium"
              >
                Sortify
              </Link>{" "}
              and are protected by international copyright, trademark, patent,
              trade secret, and other intellectual property or proprietary
              rights laws.
            </p>

            <Separator className="my-10" />

            <h2 className="text-2xl font-bold mt-10 mb-4">6. Termination</h2>
            <p>
              We may terminate or suspend your account and access to the
              application immediately, without prior notice or liability, for
              any reason, including if you breach these Terms.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">
              7. Disclaimer of Warranties
            </h2>
            <p>
              The application is provided on an &quot;AS IS&quot; and &quot;AS
              AVAILABLE&quot; basis. Sortify expressly disclaims all warranties
              of any kind, whether express or implied, including but not limited
              to the implied warranties of merchantability, fitness for a
              particular purpose, and non-infringement.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">
              8. Limitation of Liability
            </h2>
            <p>
              In no event shall Sortify be liable for any indirect, incidental,
              special, consequential, or punitive damages, including loss of
              profits, data, or other intangible losses, resulting from your
              access to or use of or inability to access or use the application.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">9. Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with
              the laws of the United States, without regard to its conflict of
              law provisions.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">
              10. Changes to Terms
            </h2>
            <p>
              We reserve the right to modify or replace these Terms at any time.
              All our terms are available on our website through this page for
              the most up to date version.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">11. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at{" "}
              <Link
                href="mailto:michael@sortifymail.com"
                className="text-black font-medium hover:underline"
              >
                michael@sortifymail.com
              </Link>{" "}
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
