import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/container";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Users, Smile, Heart } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function UseCases() {
  const { title, cases } = siteConfig.pages.home.useCases;
  const icons = [Users, Smile, Heart];

  return (
    <section className="bg-background py-16 md:py-24 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-muted/50 to-transparent -z-10" />
      <Container>
        <ScrollReveal>
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center space-y-4 text-center mb-16">
            <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl font-heading">
              {title}
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12">
          {cases.map((useCase, i) => {
            const Icon = icons[i % icons.length]!;
            return (
              <ScrollReveal key={i} delay={i * 0.1}>
                <Card className="h-full hover:border-primary/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group bg-card/50 backdrop-blur-sm">
                  <CardHeader className="flex flex-col items-center text-center space-y-6 pt-10">
                    <div className="p-4 bg-muted rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-sm group-hover:shadow-primary/30">
                      <Icon className="h-8 w-8" />
                    </div>
                    <div className="space-y-2">
                      <CardTitle className="text-xl font-heading group-hover:text-primary transition-colors">{useCase.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">{useCase.description}</CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
