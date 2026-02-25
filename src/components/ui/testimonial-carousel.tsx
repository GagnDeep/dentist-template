"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

interface TestimonialCarouselProps {
  items: readonly Testimonial[];
  className?: string;
}

export function TestimonialCarousel({ items, className }: TestimonialCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className={cn("relative group", className)}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-4">
          {items.map((item, index) => (
            <div className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-4" key={index}>
              <Card className="h-full bg-background/50 border-primary/10 hover:border-primary/30 transition-colors">
                <CardContent className="p-8 flex flex-col justify-between h-full space-y-6">
                  <Quote className="h-8 w-8 text-primary/20 rotate-180" />
                  <p className="text-lg italic text-muted-foreground leading-relaxed">
                    &quot;{item.quote}&quot;
                  </p>
                  <div className="flex items-center gap-4 pt-4 border-t border-border/40">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-primary font-bold">
                      {item.author[0]}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{item.author}</h4>
                      <p className="text-sm text-muted-foreground">{item.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-4 mt-8">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full h-12 w-12 border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all"
          onClick={scrollPrev}
          aria-label="Previous testimonial"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full h-12 w-12 border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all"
          onClick={scrollNext}
          aria-label="Next testimonial"
        >
          <ArrowRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
