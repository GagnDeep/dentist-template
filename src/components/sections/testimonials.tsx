import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/container";
import { TestimonialCarousel } from "@/components/ui/testimonial-carousel";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function Testimonials() {
  const { title, items } = siteConfig.pages.home.testimonials;

  return (
    <section className="bg-muted/30 py-16 md:py-24 border-y border-border/40 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-50 -z-10" />
      <Container>
        <ScrollReveal>
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center space-y-4 text-center mb-16">
            <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl font-heading">
              {title}
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              See why thousands of patients trust us with their smiles.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2} direction="up">
          <TestimonialCarousel items={items} />
        </ScrollReveal>
      </Container>
    </section>
  );
}
