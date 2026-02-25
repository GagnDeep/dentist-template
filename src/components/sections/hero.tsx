import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TextHighlight } from "@/components/ui/text-highlight";
import { HeroIllustration } from "@/components/graphics/hero-illustration";
import { Container } from "@/components/ui/container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Star } from "lucide-react";

export function Hero() {
  const { badge, title, highlight, description, primaryCta, secondaryCta, trustedText } =
    siteConfig.pages.home.hero;

  return (
    <section className="relative overflow-hidden py-20 md:py-32 bg-background">
      <div className="absolute inset-0 bg-grid-slate-100/[0.1] -z-10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
      <Container className="relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="flex flex-col items-start space-y-8">
            <ScrollReveal direction="down" delay={0.1}>
              <Badge variant="secondary" className="px-4 py-2 text-sm rounded-full shadow-sm border-primary/20 bg-primary/5 text-primary">
                {badge}
              </Badge>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl font-heading leading-tight">
                {title}
                <br className="hidden md:block" />
                <TextHighlight className="mt-2">{highlight}</TextHighlight>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="max-w-[42rem] leading-relaxed text-muted-foreground sm:text-xl sm:leading-8">
                {description}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" className="px-8 rounded-full shadow-lg hover:shadow-xl transition-all" asChild>
                  <Link href="/contact">{primaryCta}</Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full hover:bg-muted" asChild>
                  <Link href="/features">{secondaryCta}</Link>
                </Button>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-4">
                <div className="flex -space-x-3 overflow-hidden p-1">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="h-10 w-10 rounded-full border-2 border-background bg-muted flex items-center justify-center text-xs font-bold text-muted-foreground/50 shadow-sm"
                    >
                      U{i}
                    </div>
                  ))}
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1">
                    {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}
                  </div>
                  <span className="font-medium text-xs mt-0.5">{trustedText}</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="left" delay={0.4} className="relative mx-auto w-full max-w-[500px] lg:max-w-none">
            <HeroIllustration className="w-full h-auto drop-shadow-2xl" />
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
