import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function Integrations() {
  const { title, description, partners } = siteConfig.pages.home.integrations;

  return (
    <section className="bg-background py-16 md:py-24 border-y relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-100/[0.05] dark:bg-grid-slate-900/[0.05] -z-10" />
      <Container>
        <ScrollReveal>
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center space-y-4 text-center">
            <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl font-heading">
              {title}
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              {description}
            </p>
          </div>
        </ScrollReveal>

        <div className="mx-auto grid justify-center gap-8 grid-cols-2 md:grid-cols-4 mt-16 opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0 duration-500">
          {partners.map((partner, i) => (
            <ScrollReveal key={partner} delay={i * 0.1}>
              <div
                className="flex items-center justify-center rounded-xl border border-border/50 bg-muted/30 p-8 text-center font-bold text-lg hover:bg-background hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                {partner}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
