import "@/styles/globals.css";

import { type Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";

import { TRPCReactProvider } from "@/trpc/react";
import { ThemeProvider } from "@/components/theme-provider";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { SkipLink } from "@/components/ui/skip-link";
import { AppointmentModal } from "@/components/ui/appointment-modal";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: siteConfig.name,
    image: siteConfig.ogImage,
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.pages.contact.address,
      addressLocality: "Patiala",
      addressRegion: "PB",
      postalCode: "147001",
      addressCountry: "IN",
    },
    telephone: siteConfig.pages.contact.phone,
    url: siteConfig.url,
  };

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TRPCReactProvider>
            <SkipLink />
            <div className="flex min-h-screen flex-col">
              <AnnouncementBar />
              <Navbar />
              <main className="flex-1" id="main-content">{children}</main>
              <Footer />
            </div>
            <AppointmentModal />
          </TRPCReactProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
