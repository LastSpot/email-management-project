"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Loader2, Scan } from "lucide-react";
import { Button } from "@/components/ui/button";
import { sortEmails } from "@/app/actions/sort";
import { useState } from "react";

export default function ScanEmail() {
  const [isScanning, setIsScanning] = useState(false);

  const handleScanEmails = async () => {
    setIsScanning(true);
    await sortEmails();
    setIsScanning(false);
  };

  return (
    <Card className="shadow-lg border-0 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
      <CardContent className="p-8 text-center">
        <div className="space-y-4">
          <div className="flex justify-center">
            <div className="p-3 bg-white/20 rounded-full">
              <Scan className="h-8 w-8 text-white" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Ready to organize your emails?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Click below to scan your unread emails and automatically sort them
              into your folders using AI classification.
            </p>
          </div>
          <Button
            onClick={handleScanEmails}
            size="lg"
            className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg font-semibold shadow-lg transition-colors cursor-pointer"
            disabled={isScanning}
          >
            {isScanning ? (
              <>
                <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                Scanning...
              </>
            ) : (
              <>
                <Scan className="h-5 w-5 mr-2" />
                Scan Emails
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
