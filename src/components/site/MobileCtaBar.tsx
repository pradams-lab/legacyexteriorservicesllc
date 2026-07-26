import { PHONE_HREF } from "@/lib/site-data";
import { Phone, FileText } from "lucide-react";

export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card/95 px-3 py-2.5 backdrop-blur sm:hidden">
      <div className="flex gap-2">
        <a
          href={PHONE_HREF}
          className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-accent text-sm font-bold text-accent-foreground"
        >
          <Phone className="size-4" aria-hidden />
          Call Now
        </a>
        <a
          href="#quote"
          className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-xl border-2 border-primary/20 bg-background text-sm font-bold text-primary"
        >
          <FileText className="size-4" aria-hidden />
          Free Estimate
        </a>
      </div>
    </div>
  );
}