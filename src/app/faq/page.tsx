import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/container";
import { FAQ } from "@/components/sections/faq";
import { Newsletter } from "@/components/sections/newsletter";

export default function FAQPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: siteConfig.pages.home.faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="py-24 bg-background">
        <Container>
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center space-y-4 text-center">
            <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl font-heading">Support & FAQ</h1>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Find detailed answers to common questions about our dental services.
            </p>
          </div>
        </Container>
      </section>
      <FAQ />
      <Newsletter />
    </>
  );
}
