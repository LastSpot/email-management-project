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
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CheckCircle, Loader2 } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { sendSuggestion } from "@/app/actions/send-mail";
import { toast } from "sonner";

const formSchema = z.object({
  suggestionType: z.string().min(1, "Please select an suggestion type"),
  message: z.string().min(1, "Message is required"),
});

type FormData = z.infer<typeof formSchema>;

export default function SuggestForm({
  name,
  email,
}: {
  name: string;
  email: string;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      suggestionType: "",
      message: "",
    },
  });

  const onSubmit = async (values: FormData) => {
    setIsLoading(true);
    const data = {
      name,
      email,
      suggestionType: values.suggestionType,
      message: values.message,
    };
    try {
      await sendSuggestion(data);
      toast.success("Suggestion sent successfully");
    } catch (error) {
      toast.error("Failed to send suggestion", {
        description: "Please try again later",
      });
    }
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
        <h2 className="text-2xl font-bold mb-4">Suggestion Sent!</h2>
        <p className="text-black/70 mb-6">
          Thank you for giving us your feedback. Our team will get back to you
          within 24 hours or less.
        </p>
        <Button
          onClick={resetForm}
          className="bg-black text-white hover:bg-black/90 cursor-pointer"
        >
          Send Another Suggestion
        </Button>
      </div>
    );
  }

  // Form state
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Suggestion Type */}
        <FormField
          control={form.control}
          name="suggestionType"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Suggestion Type</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  value={field.value}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-2"
                >
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem
                      value="General Suggestion"
                      id="general-suggestion"
                      className="border-black border-2"
                    />
                    <FormLabel
                      htmlFor="general-suggestion"
                      className="font-normal cursor-pointer"
                    >
                      General Suggestion
                    </FormLabel>
                  </div>
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem
                      value="Feature Request"
                      id="feature-request"
                      className="border-black border-2"
                    />
                    <FormLabel
                      htmlFor="feature-request"
                      className="font-normal cursor-pointer"
                    >
                      Feature Request
                    </FormLabel>
                  </div>
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem
                      value="Bug Report"
                      id="bug-report"
                      className="border-black border-2"
                    />
                    <FormLabel
                      htmlFor="bug-report"
                      className="font-normal cursor-pointer"
                    >
                      Bug Report
                    </FormLabel>
                  </div>
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem
                      value="Feature Improvement"
                      id="feature-improvement"
                      className="border-black border-2"
                    />
                    <FormLabel
                      htmlFor="feature-improvement"
                      className="font-normal cursor-pointer"
                    >
                      Feature Improvement
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
                  placeholder="Write out everything you want here, be mean or nice, everything is helpful!"
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
          className="w-full bg-black text-white hover:bg-black/90 py-6 text-lg cursor-pointer"
        >
          {isLoading ? (
            <div className="flex items-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin" />
              Sending...
            </div>
          ) : (
            "Send Suggestion"
          )}
        </Button>
      </form>
    </Form>
  );
}
