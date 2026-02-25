"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Phone, Calendar } from "lucide-react";

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-4 left-4 right-4 z-50 transition-all duration-300 transform md:hidden flex gap-2",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      )}
    >
      <Button
        variant="secondary"
        size="lg"
        className="flex-1 shadow-lg border-primary/20 backdrop-blur-md bg-background/80"
        asChild
      >
        <Link href="tel:+919876543210">
          <Phone className="mr-2 h-4 w-4" />
          Call
        </Link>
      </Button>
      <Button size="lg" className="flex-[2] shadow-lg shadow-primary/25" asChild>
        <Link href="/contact">
          <Calendar className="mr-2 h-4 w-4" />
          Book Now
        </Link>
      </Button>
    </div>
  );
}
