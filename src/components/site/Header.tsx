import { Link } from "@tanstack/react-router";
import logo from "@/assets/legacy-logo.png.asset.json";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/site-data";
import { Phone } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:h-20 sm:px-6">
        <Link to="/" className="flex shrink-0 items-center" aria-label="Legacy Exterior Services LLC — home">
          <img
            src={logo.url}
            alt="Legacy Exterior Services LLC logo"
            className="h-11 w-auto sm:h-14"
          />
        </Link>

        <div className="flex items-center gap-2 sm:gap-3">
          <nav className="mr-2 hidden items-center gap-6 text-sm font-medium text-muted-foreground lg:flex">
            <Link to="/" hash="services" className="transition-colors hover:text-primary">
              Services
            </Link>
            <Link to="/" hash="gallery" className="transition-colors hover:text-primary">
              Gallery
            </Link>
            <Link to="/about" className="transition-colors hover:text-primary">
              About
            </Link>
          </nav>

          <a
            href={PHONE_HREF}
            className="inline-flex h-10 items-center gap-2 rounded-xl px-2 text-sm font-semibold text-primary transition-colors hover:bg-secondary sm:px-3"
          >
            <Phone className="size-4" aria-hidden />
            <span className="hidden sm:inline">{PHONE_DISPLAY}</span>
          </a>

          <a
            href="#quote"
            className="inline-flex h-10 items-center justify-center rounded-xl bg-accent px-4 text-sm font-semibold text-accent-foreground shadow-soft transition-colors hover:bg-accent/90"
          >
            Get Free Quote
          </a>
        </div>
      </div>
    </header>
  );
}