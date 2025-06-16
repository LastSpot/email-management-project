"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CheckCircle, Loader2 } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  inquiryType: z.string().min(1, "Please select an inquiry type"),
  message: z.string().min(1, "Message is required"),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      inquiryType: "",
      message: "",
    },
  });

  const onSubmit = async (values: FormData) => {
    setIsLoading(true);
    console.log(values);
    // Simulate API call
    setIsLoading(false);
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    form.reset();
  };

  // Success state
  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="h-8 w-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold mb-4">Message Sent!</h2>
        <p className="text-black/70 mb-6">
          Thank you for reaching out. Our team will get back to you within 48
          hours or less.
        </p>
        <Button
          onClick={resetForm}
          className="bg-black text-white hover:bg-black/90"
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  // Form state
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Name Field */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Your name"
                  className="border-black/20 focus:border-black mt-2"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Email Field */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Your email"
                  className="border-black/20 focus:border-black mt-2"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Inquiry Type */}
        <FormField
          control={form.control}
          name="inquiryType"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Inquiry Type</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  value={field.value}
                  className="flex flex-wrap gap-6 mt-2"
                >
                  <div className="flex items-center space-x-3 gap-2">
                    <RadioGroupItem
                      value="general"
                      id="general"
                      className="border-black border-2"
                    />
                    <FormLabel
                      htmlFor="general"
                      className="font-normal cursor-pointer"
                    >
                      General Inquiry
                    </FormLabel>
                  </div>
                  <div className="flex items-center space-x-3 gap-2">
                    <RadioGroupItem
                      value="application"
                      id="application"
                      className="border-black border-2"
                    />
                    <FormLabel
                      htmlFor="application"
                      className="font-normal cursor-pointer"
                    >
                      Aspira Application
                    </FormLabel>
                  </div>
                  <div className="flex items-center space-x-3 gap-2">
                    <RadioGroupItem
                      value="partnership"
                      id="partnership"
                      className="border-black border-2"
                    />
                    <FormLabel
                      htmlFor="partnership"
                      className="font-normal cursor-pointer"
                    >
                      Partnership
                    </FormLabel>
                  </div>
                  <div className="flex items-center space-x-3 gap-2">
                    <RadioGroupItem
                      value="feedback"
                      id="feedback"
                      className="border-black border-2"
                    />
                    <FormLabel
                      htmlFor="feedback"
                      className="font-normal cursor-pointer"
                    >
                      Feedback
                    </FormLabel>
                  </div>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Message Field */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="How can we help you?"
                  className="border-black/20 focus:border-black min-h-[150px] mt-2"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isLoading}
          className="w-full bg-black text-white hover:bg-black/90 py-6 text-lg"
        >
          {isLoading ? (
            <div className="flex items-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin" />
              Sending...
            </div>
          ) : (
            "Send Message"
          )}
        </Button>
      </form>
    </Form>
  );
}
