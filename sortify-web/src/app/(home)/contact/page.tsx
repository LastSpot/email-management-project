"use client";

import type React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Clock } from "lucide-react";
import Link from "next/link";
import ContactForm from "@/components/home/contact/contact-form";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <div className="px-6 py-24">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="w-16 h-1 bg-black mx-auto mb-8"></div>
            <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-black/70 max-w-2xl mx-auto">
              Have questions about Sortify? Our team is here to help you with
              any inquiries.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-black/10 bg-white text-black">
                <CardContent className="p-8">
                  <ContactForm />
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="border-black/10 bg-white text-black">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    {/* Email contact */}
                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-black/60 mt-1" />
                      <div>
                        <p className="font-medium">Inquiries</p>
                        <Link
                          href="mailto:contact@findaspira.com"
                          className="text-black/70 hover:text-black"
                        >
                          michael@sortifymail.com
                        </Link>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-black/60 mt-1" />
                      <div>
                        <p className="font-medium">Location</p>
                        <p className="text-black/70">
                          Boston, MA United States
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-black/60 mt-1" />
                      <div>
                        <p className="font-medium">Hours</p>
                        <p className="text-black/70">
                          As long as one of our team members have not gone to
                          sleep.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
