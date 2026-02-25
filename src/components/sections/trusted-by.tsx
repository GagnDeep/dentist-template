import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/container";
import { LogoMarquee } from "@/components/ui/logo-marquee";

export function TrustedBy() {
  const { title, logos } = siteConfig.pages.home.trustedBy;

  return (
    <section className="bg-muted/30 py-12 md:py-24 border-y border-border/40">
      <Container>
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider font-heading">
            {title}
          </p>
          <LogoMarquee speed={30} pauseOnHover>
            {logos.map((logo) => (
              <div
                key={logo}
                className="flex items-center justify-center text-xl font-bold text-foreground/40 hover:text-primary transition-colors cursor-pointer group"
              >
                <div className="h-8 w-8 rounded-full bg-current opacity-20 mr-3 group-hover:opacity-100 transition-opacity" />
                <span className="font-heading tracking-tight">{logo}</span>
              </div>
            ))}
          </LogoMarquee>
        </div>
      </Container>
    </section>
  );
}
