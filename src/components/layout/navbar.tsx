"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { MobileMenu } from "@/components/layout/mobile-menu";

export function Navbar() {
  const { setTheme, theme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "border-b bg-background/80 backdrop-blur-md h-16"
          : "bg-transparent h-20 border-transparent"
      )}
    >
      <div className="container flex h-full items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className={cn(
            "text-2xl font-bold tracking-tight text-primary transition-all font-heading",
            isScrolled ? "text-xl" : "text-2xl"
          )}>
            {siteConfig.name}
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative group transition-colors hover:text-primary"
            >
              {item.title}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
          ))}
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full hover:bg-muted"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button asChild size={isScrolled ? "sm" : "default"} className="transition-all rounded-full px-6 shadow-primary/20">
              <Link href="/contact">Book Now</Link>
            </Button>
          </div>
        </nav>
        <div className="flex items-center gap-4 md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
