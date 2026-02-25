import Link from "next/link";
import { Button } from "@/components/ui/button";

export function SkipLink() {
  return (
    <Button
      asChild
      className="fixed left-4 top-4 z-[100] -translate-y-[200%] transition-transform focus:translate-y-0"
    >
      <Link href="#main-content">Skip to main content</Link>
    </Button>
  );
}
