import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/container";
import { Check, X } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function Comparison() {
  const { title, ourName, competitorName, features } = siteConfig.pages.home.comparison;

  return (
    <section className="bg-muted/30 py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-100/[0.05] dark:bg-grid-slate-900/[0.05] -z-10" />
      <Container>
        <ScrollReveal>
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center space-y-4 text-center mb-16">
            <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl font-heading">
              {title}
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="max-w-4xl mx-auto overflow-hidden rounded-2xl border border-border/60 bg-background/50 backdrop-blur-md shadow-2xl">
          <Table>
            <TableHeader className="sticky top-0 bg-background/95 backdrop-blur z-10">
              <TableRow className="hover:bg-transparent border-b-2 border-primary/10">
                <TableHead className="w-[40%] pl-8 py-6 text-lg font-bold font-heading">Features</TableHead>
                <TableHead className="text-center text-primary font-bold text-xl bg-primary/5 py-6 font-heading">{ourName}</TableHead>
                <TableHead className="text-center text-muted-foreground font-medium text-lg py-6 font-heading opacity-70">{competitorName}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {features.map((feature, i) => (
                <TableRow key={i} className="hover:bg-muted/50 border-b border-border/40 transition-colors duration-200">
                  <TableCell className="font-medium pl-8 py-5 text-base">{feature.name}</TableCell>
                  <TableCell className="text-center bg-primary/5 py-5">
                    {feature.us ? (
                      <div className="h-8 w-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto shadow-sm animate-in zoom-in duration-300">
                        <Check className="h-5 w-5" />
                      </div>
                    ) : (
                      <X className="mx-auto h-5 w-5 text-muted-foreground opacity-30" />
                    )}
                  </TableCell>
                  <TableCell className="text-center py-5">
                    {feature.them ? (
                      <Check className="mx-auto h-5 w-5 text-muted-foreground" />
                    ) : (
                      <div className="h-8 w-8 rounded-full bg-red-100 text-red-500 flex items-center justify-center mx-auto opacity-50">
                         <X className="h-5 w-5" />
                      </div>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ScrollReveal>
      </Container>
    </section>
  );
}
