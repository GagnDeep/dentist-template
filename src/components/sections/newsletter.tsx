import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Container } from "@/components/ui/container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function Newsletter() {
  const { title, description, placeholder, button } = siteConfig.pages.home.newsletter;

  return (
    <section className="bg-background py-16 md:py-24 border-t relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/5 rounded-full blur-3xl -z-10" />
      <Container>
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl font-heading">
              {title}
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              {description}
            </p>
            <div className="flex w-full max-w-sm items-center space-x-2 mt-8">
              <Input type="email" placeholder={placeholder} className="rounded-l-full border-r-0 focus:ring-0 shadow-sm" />
              <Button className="rounded-r-full px-8">{button}</Button>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
