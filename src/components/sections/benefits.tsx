import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/container";
import { Check } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function Benefits() {
  const { title, items } = siteConfig.pages.home.benefits;

  return (
    <section className="bg-background py-16 md:py-24 relative">
      <div className="absolute inset-0 bg-grid-slate-100/[0.05] dark:bg-grid-slate-900/[0.05] -z-10" />
      <Container>
        <ScrollReveal>
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center space-y-4 text-center">
            <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl font-heading">
              {title}
            </h2>
          </div>
        </ScrollReveal>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-16">
          {items.map((benefit, i) => (
            <ScrollReveal key={benefit.title} delay={i * 0.1}>
              <div
                className="group flex flex-col items-start space-y-3 rounded-xl border border-border/40 p-6 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300 bg-background/60 backdrop-blur-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                  <Check className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-lg font-heading group-hover:text-primary transition-colors">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
