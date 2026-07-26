import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, ShieldCheck, Trophy, ArrowRight } from "lucide-react";

import { SiteLayout } from "@/components/site/SiteLayout";
import { CallButton, QuoteButton } from "@/components/site/Buttons";
import { StarRating } from "@/components/site/StarRating";
import { BeforeAfterCard } from "@/components/site/BeforeAfterCard";
import {
  services,
  RATING,
  REVIEW_COUNT,
  GOOGLE_PROFILE_URL,
  SERVICE_AREAS,
} from "@/lib/site-data";

import heroImg from "@/assets/hero-fence-driveway.jpg.asset.json";
import stainingImg from "@/assets/fence-staining.jpg.asset.json";
import baPool from "@/assets/ba-pool-fence.jpg.asset.json";
import baPatio from "@/assets/ba-patio-stone.jpg.asset.json";

const DESCRIPTION =
  "Fence & deck staining, pressure washing, and house soft-washing across Dallas, Plano, Frisco, Allen & McKinney. Fully insured. Call (214) 205-4075 for a free quote.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Legacy Exterior Services LLC | Fence Staining & Pressure Washing DFW" },
      { name: "description", content: DESCRIPTION },
      {
        property: "og:title",
        content: "Legacy Exterior Services LLC | Exterior Cleaning & Wood Staining in DFW",
      },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:image", content: `https://legacyexteriorservices.com${heroImg.url}` },
      { name: "twitter:image", content: `https://legacyexteriorservices.com${heroImg.url}` },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="px-4 pb-14 pt-10 sm:px-6 sm:pb-20 sm:pt-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-muted-foreground">
              <MapPin className="size-3.5 text-accent" aria-hidden />
              Trusted Exterior Cleaning & Wood Staining Specialists in DFW
            </span>

            <h1 className="mt-5 text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-6xl">
              Protect and Revitalize Your Property With Expert Exterior Services.
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-foreground/80 sm:text-lg">
              From weather-beaten wooden fences and decks to deep-set concrete cleaning, we bring
              your home's exterior back to life with professional care and superior craftsmanship.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <CallButton />
              <QuoteButton />
            </div>

            <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
              <StarRating rating={RATING} />
              <span>
                <strong className="font-semibold text-primary">{RATING}</strong> from {REVIEW_COUNT}{" "}
                Google reviews
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-lift">
              <img
                src={baPool.url}
                alt="Before and after: weathered gray backyard fence restored to a rich stained wood finish"
                className="w-full object-cover"
              />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <img
                src={heroImg.url}
                alt="Freshly stained wooden fence beside a clean residential driveway in DFW"
                loading="lazy"
                className="aspect-[4/3] w-full rounded-2xl border border-border object-cover shadow-soft"
              />
              <img
                src={stainingImg.url}
                alt="Fence mid-project showing the contrast between stained and unstained wood"
                loading="lazy"
                className="aspect-[4/3] w-full rounded-2xl border border-border object-cover shadow-soft"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-border bg-card px-4 py-10 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-3">
          <TrustItem
            icon={<Trophy className="size-5" aria-hidden />}
            title="Years of Experience"
            body="Proven DFW track record with meticulous attention to detail."
          />
          <TrustItem
            icon={<ShieldCheck className="size-5" aria-hidden />}
            title="Fully Insured"
            body="Protecting your property, landscaping, and outdoor structures on every project."
          />
          <TrustItem
            icon={<StarRating rating={RATING} size="size-4" />}
            title="Top-Rated Local Service"
            body={`Backed by ${RATING}-star local homeowner reviews across the metroplex.`}
            link={GOOGLE_PROFILE_URL}
          />
        </div>
      </section>

      {/* Services */}
      <section id="services" className="scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold sm:text-4xl">Our Core Services</h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              Everything your home's exterior needs — handled with proper prep work and
              professional-grade equipment.
            </p>
          </div>

          <div className="mt-9 grid gap-5 sm:grid-cols-2">
            {services.map((s) => (
              <article
                key={s.slug}
                className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-shadow hover:shadow-lift"
              >
                <h3 className="text-xl font-bold">{s.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {s.snippet}
                </p>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
                >
                  Learn More
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="scroll-mt-24 border-t border-border bg-card px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold sm:text-4xl">Before & After</h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              Real transformations from real DFW properties.
            </p>
          </div>

          <div className="mt-9 grid gap-5 md:grid-cols-2">
            <BeforeAfterCard
              src={baPool.url}
              alt="Before and after of a backyard pool fence, weathered gray then richly stained"
              title="Weathered Gray Fence ➡ Rich Stained Wood Finish"
              caption="Full restoration wash and semi-transparent stain on a backyard pool fence."
            />
            <BeforeAfterCard
              src={baPatio.url}
              alt="Before and after of a stone patio and concrete walkway, dirty then clean"
              title="Dirty Concrete Surface ➡ Clean, Bright Walkway"
              caption="Surface-cleaned concrete and stonework with even, stripe-free results."
            />
            <BeforeAfterCard
              src={stainingImg.url}
              alt="Fence showing stained section next to bare untreated wood"
              title="Stained Outdoor Wood ➡ Protected, Polished Finish"
              caption="The difference proper prep and a sealed finish makes, panel by panel."
            />
            <BeforeAfterCard
              src={heroImg.url}
              alt="Clean driveway alongside a freshly stained privacy fence"
              title="Neglected Exterior ➡ Curb-Appeal Ready"
              caption="Fence staining paired with a full driveway and walkway wash."
            />
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-6xl rounded-2xl border border-border bg-card p-6 text-center shadow-soft sm:p-8">
          <h2 className="text-xl font-bold sm:text-2xl">Proudly Serving the DFW Metroplex</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {SERVICE_AREAS.join(" · ")} · and surrounding communities
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}

function TrustItem({
  icon,
  title,
  body,
  link,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
  link?: string;
}) {
  const content = (
    <>
      <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-accent">
        {icon}
      </span>
      <span>
        <span className="block font-bold text-primary">{title}</span>
        <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">{body}</span>
      </span>
    </>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noreferrer" className="flex gap-3">
        {content}
      </a>
    );
  }
  return <div className="flex gap-3">{content}</div>;
}
