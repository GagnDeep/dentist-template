"use client";

import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";

export function FAQ() {
  const { title, items } = siteConfig.pages.home.faq;
  const [search, setSearch] = useState("");

  const filteredItems = items.filter(
    (item) =>
      item.q.toLowerCase().includes(search.toLowerCase()) ||
      item.a.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="bg-background py-16 md:py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <Container>
        <ScrollReveal>
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl font-heading">
              {title}
            </h2>
            <div className="relative w-full max-w-sm mt-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search questions..."
                className="pl-10 rounded-full"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </ScrollReveal>

        <div className="mx-auto max-w-3xl">
          {filteredItems.length > 0 ? (
            <Accordion type="single" collapsible className="w-full space-y-4">
              {filteredItems.map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.05}>
                  <AccordionItem value={`item-${i}`} className="border rounded-lg px-4 bg-muted/20 data-[state=open]:bg-muted/40 transition-colors">
                    <AccordionTrigger className="text-left font-medium text-lg py-4 hover:no-underline hover:text-primary transition-colors">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                </ScrollReveal>
              ))}
            </Accordion>
          ) : (
            <p className="text-center text-muted-foreground">No matching questions found.</p>
          )}
        </div>
      </Container>
    </section>
  );
}
