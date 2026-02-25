"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Menu, ArrowRight } from "lucide-react";
import { useState } from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:w-[400px] p-0 flex flex-col bg-background/95 backdrop-blur-xl border-l">
        <div className="p-6 border-b">
          <SheetTitle className="text-2xl font-bold font-heading text-primary">{siteConfig.name}</SheetTitle>
          <SheetDescription className="sr-only">Mobile Navigation Menu</SheetDescription>
        </div>
        <nav className="flex-1 flex flex-col p-6 gap-2 overflow-y-auto">
          {siteConfig.nav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="group flex items-center justify-between py-4 text-lg font-medium border-b border-border/40 last:border-0 hover:text-primary transition-colors"
            >
              <ScrollReveal delay={i * 0.05} direction="left" duration={0.3}>
                {item.title}
              </ScrollReveal>
              <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </Link>
          ))}
        </nav>
        <div className="p-6 border-t bg-muted/20">
          <Button asChild className="w-full text-lg h-12 shadow-lg" size="lg">
            <Link href="/contact" onClick={() => setOpen(false)}>Book Appointment</Link>
          </Button>
          <div className="mt-6 flex flex-col gap-2 text-sm text-muted-foreground text-center">
            <p>Or call us directly:</p>
            <a href={`tel:${siteConfig.pages.contact.phone}`} className="font-bold text-foreground text-lg">
              {siteConfig.pages.contact.phone}
            </a>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
