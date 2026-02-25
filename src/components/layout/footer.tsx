import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="border-t bg-background pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold tracking-tight text-primary font-heading">
                {siteConfig.name}
              </span>
            </Link>
            <p className="max-w-md text-base text-muted-foreground leading-relaxed">
              {siteConfig.description}
            </p>
            <div className="flex space-x-4">
              {siteConfig.footer.social.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="h-10 w-10 flex items-center justify-center rounded-full bg-muted text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground hover:-translate-y-1"
                >
                  <span className="sr-only">{item.title}</span>
                  {/* Icons could be mapped here */}
                  <div className="h-5 w-5 bg-current mask-icon" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:col-span-2">
            <div className="space-y-4">
              <h3 className="text-sm font-semibold tracking-wider uppercase text-foreground/80">
                Company
              </h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {siteConfig.footer.company.map((item) => (
                  <li key={item.title}>
                    <Link href={item.href} className="hover:text-primary transition-colors">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-semibold tracking-wider uppercase text-foreground/80">
                Legal
              </h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {siteConfig.footer.legal.map((item) => (
                  <li key={item.title}>
                    <Link href={item.href} className="hover:text-primary transition-colors">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-primary">Privacy</Link>
            <Link href="/terms" className="hover:text-primary">Terms</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
