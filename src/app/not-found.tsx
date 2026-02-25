import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background text-center">
      <Container>
        <h1 className="text-9xl font-bold text-primary/20 font-heading">404</h1>
        <h2 className="mt-8 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-heading">
          Page not found
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/">Go back home</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact">Contact Support</Link>
          </Button>
        </div>
      </Container>
    </div>
  );
}
