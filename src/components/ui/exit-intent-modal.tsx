"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ExitIntentModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasTriggered) {
        // Check if previously dismissed
        const dismissed = sessionStorage.getItem("exit-intent-dismissed");
        if (!dismissed) {
          setIsOpen(true);
          setHasTriggered(true);
        }
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [hasTriggered]);

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      sessionStorage.setItem("exit-intent-dismissed", "true");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold font-heading">{"Wait! Don't leave yet." }</DialogTitle>
          <DialogDescription className="text-lg pt-2">
            {"Get a free consultation when you book today." }
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <div className="bg-primary/5 p-4 rounded-lg border border-primary/10 flex items-center justify-center">
             <span className="text-4xl font-bold text-primary">50% OFF</span>
             <span className="ml-2 text-sm text-muted-foreground">Consultation</span>
          </div>
        </div>
        <DialogFooter className="sm:justify-center">
          <Button asChild size="lg" className="w-full">
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              {"Claim Offer" }
            </Link>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
