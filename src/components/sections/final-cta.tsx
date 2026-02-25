import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { TextHighlight } from "@/components/ui/text-highlight";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function FinalCTA() {
  const { title, description, cta } = siteConfig.pages.home.finalCta;

  return (
    <section className="bg-primary py-24 md:py-32 text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-blue-600 -z-10" />
      <div className="absolute -top-24 -left-24 h-64 w-64 bg-white/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-24 -right-24 h-64 w-64 bg-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <Container>
        <ScrollReveal>
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center space-y-8 text-center">
            <h2 className="font-bold text-4xl sm:text-5xl md:text-6xl font-heading text-white leading-tight">
              {title}
              <TextHighlight className="text-primary-foreground bg-white/20 mt-2 block w-fit mx-auto px-4 py-1 rounded-lg rotate-1 transform shadow-lg backdrop-blur-sm">
                Book Today
              </TextHighlight>
            </h2>
            <p className="max-w-[85%] leading-relaxed text-primary-foreground/90 sm:text-xl sm:leading-8">
              {description}
            </p>
            <Button size="lg" variant="secondary" className="mt-8 px-12 py-6 text-lg rounded-full shadow-2xl hover:scale-105 transition-transform duration-300 font-bold text-primary" asChild>
              <Link href="/contact">{cta}</Link>
            </Button>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
