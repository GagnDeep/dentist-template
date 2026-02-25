import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function ProductPreview() {
  const { badge, title, description } = siteConfig.pages.home.productPreview;

  return (
    <section className="bg-muted/20 py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -z-10" />

      <Container>
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <Badge variant="outline" className="px-3 py-1 border-primary/20 text-primary bg-primary/5">
              {badge}
            </Badge>
            <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl font-heading">
              {title}
            </h2>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              {description}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3} className="mx-auto mt-16 max-w-5xl rounded-xl border bg-background/50 shadow-2xl backdrop-blur border-border/40 p-2 md:p-4 hover:scale-[1.01] transition-transform duration-700">
          <div className="aspect-video w-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 rounded-lg overflow-hidden relative group">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-4xl font-bold text-muted-foreground/20 group-hover:text-primary/20 transition-colors duration-500 font-heading">
                In-House Dental Lab
              </span>
            </div>

            {/* Animated decorative elements */}
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-blue-400/10 rounded-full blur-2xl animate-pulse delay-700" />
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
