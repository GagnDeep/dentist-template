"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 p-4 md:p-6 z-[60]"
        >
          <div className="bg-background/95 backdrop-blur-md border border-border rounded-lg shadow-2xl max-w-4xl mx-auto p-4 md:p-6 flex flex-col md:flex-row items-center gap-4 justify-between">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              {"We use cookies to ensure you get the best experience on our website." }
            </p>
            <div className="flex gap-4">
              <Button variant="outline" size="sm" onClick={handleDecline}>
                {"Decline" }
              </Button>
              <Button size="sm" onClick={handleAccept}>
                {"Accept" }
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
