import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TextHighlight } from "@/components/ui/text-highlight";
import { Container } from "@/components/ui/container";
import { SmileTransformation } from "@/components/graphics/smile-transformation";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Check } from "lucide-react";

export function FeatureDeepDive() {
  const { badge, title, highlight, titleSuffix, description, list, cta } =
    siteConfig.pages.home.featureDeepDive;

  return (
    <section className="py-24 bg-background relative">
      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)]" />
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-8 items-center">
          <ScrollReveal direction="right" delay={0.2} className="relative order-2 lg:order-1">
            <SmileTransformation className="shadow-2xl ring-1 ring-border/50 transition-all hover:scale-105 duration-500" />

            {/* Decorative elements */}
            <div className="absolute -top-12 -left-12 h-24 w-24 bg-primary/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-12 -right-12 h-32 w-32 bg-blue-500/20 rounded-full blur-3xl -z-10" />
          </ScrollReveal>

          <div className="flex flex-col space-y-8 order-1 lg:order-2">
            <ScrollReveal>
              <Badge variant="outline" className="w-fit text-primary border-primary/20 bg-primary/5 px-3 py-1 text-sm rounded-full">
                {badge}
              </Badge>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-heading leading-tight">
                {title}
                <TextHighlight className="text-primary-foreground">{highlight}</TextHighlight>
                <br />
                {titleSuffix}
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed leading-relaxed">
                {description}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <ul className="grid gap-4 py-4">
                {list.map((item, _i) => (
                  <li key={item} className="flex items-center gap-3 group">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Check className="h-4 w-4" />
                    </div>
                    <span className="text-foreground font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <Button size="lg" className="shadow-lg shadow-primary/25 w-fit" asChild>
                <Link href="/contact">{cta}</Link>
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
