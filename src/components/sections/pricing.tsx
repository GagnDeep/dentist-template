import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { TextUnderline } from "@/components/ui/text-underline";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: readonly string[];
  highlight?: boolean;
}

export function Pricing() {
  const { title, description, cta, plans } = siteConfig.pages.home.pricing;

  return (
    <section className="bg-muted/30 py-16 md:py-24 relative">
      <div className="absolute inset-0 bg-grid-slate-200/[0.2] dark:bg-grid-slate-800/[0.1] -z-10" />
      <Container>
        <ScrollReveal>
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center space-y-4 text-center mb-16">
            <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl font-heading">
              <TextUnderline>{title}</TextUnderline>
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              {description}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-3 lg:gap-12 max-w-5xl mx-auto">
          {plans.map((plan, i) => {
            const p = plan as unknown as PricingPlan;
            return (
            <ScrollReveal key={p.name} delay={i * 0.1} className={cn(
              "relative flex flex-col",
              p.highlight && "md:-mt-4 md:mb-4 z-10"
            )}>
              <Card className={cn(
                "flex-1 flex flex-col transition-all duration-300 hover:shadow-xl border-border/50",
                p.highlight
                  ? "border-primary shadow-lg shadow-primary/10 scale-105"
                  : "bg-background/60 hover:border-primary/50"
              )}>
                {p.highlight && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold shadow-md">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="font-heading text-xl">{p.name}</CardTitle>
                  <CardDescription>{p.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 space-y-6">
                  <div className="text-4xl font-bold font-heading text-primary">
                    {p.price}
                  </div>
                  <ul className="space-y-3">
                    {p.features?.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-primary shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className={cn("w-full", p.highlight ? "bg-primary" : "bg-muted text-foreground hover:bg-muted/80")} asChild>
                    <Link href="/contact">Book Now</Link>
                  </Button>
                </CardFooter>
              </Card>
            </ScrollReveal>
          )})}
        </div>

        <ScrollReveal delay={0.4} className="mt-16 text-center">
          <Button size="lg" variant="outline" className="px-8 rounded-full" asChild>
            <Link href="/pricing">{cta}</Link>
          </Button>
        </ScrollReveal>
      </Container>
    </section>
  );
}
