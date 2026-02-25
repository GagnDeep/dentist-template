import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/container";
import { Star } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function SocialProof() {
  const { avatarImages, text, rating } = siteConfig.pages.home.socialProof;

  return (
    <section className="bg-background py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-muted/20 to-transparent -z-10" />
      <Container>
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="flex -space-x-4">
              {avatarImages.map((src, i) => (
                <div
                  key={i}
                  className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-background bg-muted shadow-sm hover:scale-110 transition-transform duration-300 z-10 hover:z-20"
                >
                  {/* Fallback avatar if no image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center text-xs text-muted-foreground font-bold">
                    U{i + 1}
                  </div>
                </div>
              ))}
              <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-background bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold shadow-sm z-20">
                +5k
              </div>
            </div>

            <div className="flex items-center space-x-1 mt-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < rating ? "fill-yellow-400 text-yellow-400 animate-pulse" : "text-muted-foreground"
                  }`}
                  style={{ animationDelay: `${i * 200}ms` }}
                />
              ))}
              <span className="ml-2 font-bold font-heading">{rating} / 5</span>
            </div>
            <p className="max-w-[42rem] text-lg font-medium text-foreground">{text}</p>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
