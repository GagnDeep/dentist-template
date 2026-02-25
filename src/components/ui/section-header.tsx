import { TextHighlight } from "@/components/ui/text-highlight";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  highlight?: string;
  description?: string;
  className?: string;
  align?: "left" | "center" | "right";
}

export function SectionHeader({ title, highlight, description, className, align = "center" }: SectionHeaderProps) {
  return (
    <div className={cn("flex flex-col space-y-4 mb-16",
      align === "center" && "items-center text-center mx-auto max-w-[58rem]",
      align === "left" && "items-start text-left",
      align === "right" && "items-end text-right",
      className
    )}>
      <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl font-heading">
        {title}
        {highlight && (
          <>
            <br className="hidden md:block" />
            <TextHighlight className={cn("mt-2", align === "center" ? "mx-auto" : "")}>
              {highlight}
            </TextHighlight>
          </>
        )}
      </h2>
      {description && (
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          {description}
        </p>
      )}
    </div>
  );
}
