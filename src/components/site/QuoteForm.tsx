import { useState } from "react";
import { services, PHONE_DISPLAY, PHONE_HREF } from "@/lib/site-data";
import { CheckCircle2, Phone } from "lucide-react";

export function QuoteForm() {
  const [sent, setSent] = useState(false);

  return (
    <section id="quote" className="scroll-mt-24 bg-primary px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl">
            Ready to Upgrade Your Property? Get a Free Quote Today.
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-primary-foreground/70">
            Tell us what your property needs and we'll get back to you with a straightforward,
            no-obligation estimate. No hidden fees, no jargon.
          </p>
          <a
            href={PHONE_HREF}
            className="mt-6 inline-flex items-center gap-2 text-lg font-semibold text-accent"
          >
            <Phone className="size-5" aria-hidden />
            {PHONE_DISPLAY}
          </a>
        </div>

        <div className="rounded-2xl bg-card p-6 shadow-lift sm:p-8">
          {sent ? (
            <div className="flex flex-col items-center gap-3 py-10 text-center">
              <CheckCircle2 className="size-10 text-accent" aria-hidden />
              <h3 className="text-xl font-bold">Thanks — we've got it.</h3>
              <p className="text-sm text-muted-foreground">
                We'll reach out shortly. Need it sooner? Call {PHONE_DISPLAY}.
              </p>
            </div>
          ) : (
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-primary">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  placeholder="Jane Smith"
                  className="h-12 w-full rounded-xl border border-input bg-background px-4 text-base outline-none transition-colors focus:border-accent"
                />
              </div>
              <div>
                <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-primary">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  inputMode="tel"
                  placeholder="(214) 555-0134"
                  className="h-12 w-full rounded-xl border border-input bg-background px-4 text-base outline-none transition-colors focus:border-accent"
                />
              </div>
              <div>
                <label htmlFor="service" className="mb-1.5 block text-sm font-semibold text-primary">
                  Service Needed
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  defaultValue=""
                  className="h-12 w-full rounded-xl border border-input bg-background px-4 text-base outline-none transition-colors focus:border-accent"
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {services.map((s) => (
                    <option key={s.slug} value={s.name}>
                      {s.name}
                    </option>
                  ))}
                </select>
              </div>
              <button
                type="submit"
                className="h-13 w-full rounded-xl bg-accent py-3.5 text-base font-semibold text-accent-foreground shadow-soft transition-colors hover:bg-accent/90"
              >
                Send My Free Quote
              </button>
              <p className="text-center text-xs text-muted-foreground">
                We only use your details to prepare your estimate.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}