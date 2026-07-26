import { Link } from "@tanstack/react-router";
import logo from "@/assets/legacy-logo.png.asset.json";
import {
  BUSINESS_NAME,
  PHONE_DISPLAY,
  PHONE_HREF,
  SERVICE_AREAS,
  services,
} from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card px-4 pb-28 pt-14 sm:px-6 sm:pb-14">
      <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <img src={logo.url} alt={`${BUSINESS_NAME} logo`} className="h-14 w-auto" />
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Exterior cleaning, wood staining, and restoration for homeowners across the
            Dallas–Fort Worth metroplex.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-primary">Contact</h3>
          <a
            href={PHONE_HREF}
            className="mt-3 block text-lg font-semibold text-accent hover:underline"
          >
            {PHONE_DISPLAY}
          </a>
          <p className="mt-2 text-sm text-muted-foreground">Mon–Sat, 8am–6pm</p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-primary">Services</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="transition-colors hover:text-primary"
                >
                  {s.name}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/about" className="transition-colors hover:text-primary">
                About Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-primary">Service Areas</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {SERVICE_AREAS.join(", ")}, and surrounding DFW communities.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-border pt-6 text-center text-xs text-muted-foreground">
        Copyright © 2026 {BUSINESS_NAME}. All Rights Reserved.
      </div>
    </footer>
  );
}