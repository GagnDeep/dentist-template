import { siteConfig } from "@/config/site";
import { FeatureIcon } from "@/components/graphics/feature-icon";
import { Container } from "@/components/ui/container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function FeatureOverview() {
  const { title, description, features } = siteConfig.pages.home.featureOverview;

  return (
    <section className="bg-background py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-100/[0.05] dark:bg-grid-slate-900/[0.05] -z-10" />
      <Container>
        <ScrollReveal>
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl font-heading">
              {title}
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              {description}
            </p>
          </div>
        </ScrollReveal>

        <div className="mx-auto grid justify-center gap-6 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 lg:grid-cols-4 mt-16">
          {features.map((feature, i) => (
            <ScrollReveal key={feature.title} delay={i * 0.1}>
              <div
                className="group relative overflow-hidden rounded-2xl border bg-background p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="flex flex-col justify-between h-full relative z-10 space-y-4">
                  <div className="bg-muted w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300">
                    <FeatureIcon name={feature.icon} className="h-8 w-8 text-foreground group-hover:text-primary transition-colors" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-bold text-lg font-heading group-hover:text-primary transition-colors">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
