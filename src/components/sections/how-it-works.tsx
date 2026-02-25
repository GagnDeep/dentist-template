import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function HowItWorks() {
  const { title, steps } = siteConfig.pages.home.howItWorks;

  return (
    <section className="bg-muted/30 py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-200/[0.1] dark:bg-grid-slate-800/[0.1] -z-10" />
      <Container>
        <ScrollReveal>
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center space-y-4 text-center">
            <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl font-heading">
              {title}
            </h2>
          </div>
        </ScrollReveal>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 mt-16 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-8 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -z-10" />

          {steps.map((step, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div
                className="relative flex flex-col items-center space-y-4 text-center group"
              >
                <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-background border-2 border-primary/20 text-xl font-bold text-primary shadow-sm group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 transition-all duration-300 z-10">
                  {step.step}
                  <div className="absolute inset-0 rounded-full bg-primary/10 animate-ping opacity-0 group-hover:opacity-100" />
                </div>
                <h3 className="text-xl font-bold font-heading">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
