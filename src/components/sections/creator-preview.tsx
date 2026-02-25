import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function CreatorPreview() {
  const { title, role, bio } = siteConfig.pages.home.creatorPreview;

  return (
    <section className="bg-background py-16 md:py-24 relative overflow-hidden">
      <div className="absolute left-0 bottom-0 w-full h-1/2 bg-gradient-to-t from-muted/30 to-transparent -z-10" />
      <Container>
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
          <ScrollReveal direction="right" delay={0.2} className="w-full md:w-1/2 flex justify-center relative">
            <div className="relative h-80 w-80 md:h-96 md:w-96 overflow-hidden rounded-full border-8 border-background shadow-2xl z-10">
              <div className="absolute inset-0 bg-muted flex items-center justify-center text-muted-foreground bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800">
                {/* Image Placeholder */}
                <span className="font-heading text-4xl opacity-20">Dr. Photo</span>
              </div>
            </div>

            {/* Background Decorations */}
            <div className="absolute top-0 right-0 h-64 w-64 bg-primary/20 rounded-full blur-3xl -z-0 translate-x-12 -translate-y-12" />
            <div className="absolute bottom-0 left-0 h-48 w-48 bg-blue-500/10 rounded-full blur-3xl -z-0 -translate-x-12 translate-y-12" />
          </ScrollReveal>

          <div className="w-full md:w-1/2 space-y-6">
            <ScrollReveal>
              <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                {role}
              </Badge>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-heading leading-tight">
                {title}
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-muted-foreground md:text-xl/relaxed leading-relaxed border-l-4 border-primary/20 pl-6 italic">
                {bio}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="flex gap-4 pt-4">
                 <div className="h-2 w-12 bg-primary rounded-full" />
                 <div className="h-2 w-4 bg-primary/30 rounded-full" />
                 <div className="h-2 w-2 bg-primary/10 rounded-full" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
