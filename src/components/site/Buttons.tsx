import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/site-data";
import { Phone, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

export function CallButton({
  className,
  label,
  compact,
}: {
  className?: string;
  label?: string;
  compact?: boolean;
}) {
  return (
    <a
      href={PHONE_HREF}
      className={cn(
        "inline-flex items-center justify-center rounded-xl bg-accent font-semibold text-accent-foreground shadow-soft transition-colors hover:bg-accent/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
        compact
          ? "h-11 gap-2 px-5 text-sm"
          : "h-14 min-w-[260px] gap-2.5 px-6 py-3.5 text-base whitespace-nowrap",
        className,
      )}
    >
      <Phone className="size-4 shrink-0" aria-hidden />
      <span className="tracking-tight">{label ?? `Call Now: ${PHONE_DISPLAY}`}</span>
    </a>
  );
}

export function QuoteButton({
  className,
  label = "Request Free Online Estimate",
  variant = "outline",
  compact,
}: {
  className?: string;
  label?: string;
  variant?: "outline" | "solid";
  compact?: boolean;
}) {
  return (
    <a
      href="#quote"
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl px-5 font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
        variant === "outline"
          ? "border-2 border-primary/25 bg-card text-primary hover:border-primary/50 hover:bg-secondary"
          : "bg-primary text-primary-foreground hover:bg-primary/90",
        compact ? "h-11 text-sm" : "h-13 py-3.5 text-base",
        className,
      )}
    >
      <FileText className="size-4 shrink-0" aria-hidden />
      <span>{label}</span>
    </a>
  );
}