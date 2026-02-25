import Link from "next/link";
import { siteConfig } from "@/config/site";

export function AnnouncementBar() {
  const { text, linkText, href } = siteConfig.pages.home.announcement;

  return (
    <div className="bg-primary px-4 py-2 text-center text-sm font-medium text-primary-foreground">
      <p>
        {text}{" "}
        <Link href={href} className="underline hover:text-white/80 transition-colors">
          {linkText}
        </Link>
      </p>
    </div>
  );
}
