import { Navigation } from "@/components/home/navigation";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { Footer } from "@/components/home/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Sortify",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
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
            <p className="text-black/70">Last Updated: June 16, 2025</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <p>
              At Sortify, we take your privacy seriously. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your
              information when you use our application. Please read this privacy
              policy carefully. If you do not agree with the terms of this
              privacy policy, please do not access the application.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">
              Information We Collect
            </h2>
            <p>
              We collect information that you provide directly to us when you
              register on our application, create or modify your profile, and
              participate in interactive features.
            </p>

            <h3 className="text-xl font-bold mt-8 mb-3">
              Personal Information
            </h3>
            <p>We may collect the following personal information:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Full name</li>
              <li>Email address</li>
              <li>Email provider authentication, credentials, and tokens</li>
            </ul>

            <h3 className="text-xl font-bold mt-8 mb-3">Usage Information</h3>
            <p>
              We may also collect information about how you access and use our
              application.
            </p>

            <Separator className="my-10" />

            <h2 className="text-2xl font-bold mt-10 mb-4">
              How We Use Your Information
            </h2>
            <p>
              We use the information we collect for various purposes, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Providing, maintaining, and improving our application</li>
              <li>Handling your requests and inquiries</li>
              <li>Verifying your identity and preventing fraud</li>
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
              We do not store any personal information on our servers. All data
              is stored in the cloud. Personal information includes emails&apos;
              contents. Only credentials are stored on our servers to provide
              you with the service and authentication.
            </p>

            <h3 className="text-xl font-bold mt-8 mb-3">Service Providers</h3>
            <p>
              We may use your information with third-party vendors and other
              service providers who need access to such information to carry out
              work on our behalf, such as email delivery and customer support.
            </p>

            <h3 className="text-xl font-bold mt-8 mb-3">Legal Requirements</h3>
            <p>
              We do not disclose your information, unless we are forced to, by
              legal or physical force, to (a) comply with the law or legal
              process; (b) protect and defend our rights and property; (c)
              protect against misuse or unauthorized use of our application; and
              (d) protect the personal safety or property of our users or the
              public.
            </p>

            <Separator className="my-10" />

            <h2 className="text-2xl font-bold mt-10 mb-4">Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to
              protect the security of your personal information. However, please
              be aware that no security measures are perfect or impenetrable,
              and we cannot guarantee the security of your data transmitted to
              our application.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">
              Your Rights and Choices
            </h2>
            <p>You have several rights regarding your personal information:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>
                Access and update your information through your email provider
                account settings
              </li>
              <li>Request deletion of your personal information</li>
              <li>Request a copy of your personal data</li>
              <li>
                Object to the processing of your personal information. However,
                do keep in mind your provider credential is crucial to our core
                service
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-4">
              International Data Transfers
            </h2>
            <p>
              Your information may be transferred to, and maintained on,
              computers located outside of your state, province, country, or
              other governmental jurisdiction where the data protection laws may
              differ from those in your jurisdiction. Our servers are currently
              located in the United States. However, we cannot speak for our
              future servers.
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
