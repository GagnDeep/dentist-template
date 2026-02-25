import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-100/[0.05] dark:bg-grid-slate-900/[0.05] -z-10" />

      {/* Decorative Circles */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -z-10 animate-pulse delay-700" />

      <Container>
        <h1 className="text-[10rem] font-bold text-primary/10 font-heading leading-none select-none">404</h1>
        <div className="relative -mt-24 z-10">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl font-heading">
            Page not found
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-lg mx-auto">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved or deleted.
          </p>

          <div className="mt-8 max-w-md mx-auto relative">
            <Input
              type="text"
              placeholder="Search site..."
              className="pl-10 h-12 rounded-full shadow-lg border-primary/20 focus:ring-primary"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          </div>

          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg" className="rounded-full px-8 shadow-lg">
              <Link href="/">Go back home</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8">
              <Link href="/contact">Contact Support</Link>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
