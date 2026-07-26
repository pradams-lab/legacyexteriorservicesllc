import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

import { SiteLayout } from "@/components/site/SiteLayout";
import { ConversionBlock } from "@/components/site/ConversionBlock";
import { StarRating } from "@/components/site/StarRating";
import { RATING, REVIEW_COUNT, GOOGLE_PROFILE_URL } from "@/lib/site-data";
import stainingImg from "@/assets/fence-staining.jpg.asset.json";

const DESCRIPTION =
  "Legacy Exterior Services LLC is rooted in the DFW community, raising the standard of exterior property care through meticulous prep work and superior execution.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Legacy Exterior Services LLC | DFW Exterior Care" },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: "About Legacy Exterior Services LLC" },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: AboutPage,
});

const story = [
  {
    title: "Local Commitment",
    body: "Proudly rooted in the DFW community, Legacy Exterior Services was built on a simple standard: treating every homeowner's property with the exact same care, precision, and respect as our own.",
  },
  {
    title: "The Mission",
    body: "We noticed too many local contractors rushing jobs, leaving behind property damage, or failing to protect outdoor wood and concrete from the harsh Texas elements. Our mission is to raise the standard of exterior property care through meticulous preparation and superior execution.",
  },
];

const trust = [
  {
    title: "Meticulous Prep Work",
    body: "We believe that 80% of a quality finish happens before a single drop of stain or wash touches your property. We never skip the critical prep stages.",
  },
  {
    title: "Transparent Communication",
    body: "No hidden fees, no confusing agency jargon, and no surprise charges. We tell you exactly what your property needs and deliver on our word.",
  },
  {
    title: "Fully Protected",
    body: "Fully insured and equipped with professional-grade machinery and eco-safe solutions to safeguard your landscaping, pets, and exterior surfaces.",
  },
];

function AboutPage() {
  return (
    <SiteLayout>
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
        >
          <ArrowLeft className="size-4" aria-hidden />
          Back to Home
        </Link>

        <h1 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl">
          About Legacy Exterior Services LLC
        </h1>
        <p className="mt-4 text-base leading-relaxed text-foreground/80 sm:text-lg">
          Dedicated to protecting, restoring, and beautifying properties across the Dallas–Fort
          Worth metroplex with uncompromising craftsmanship.
        </p>

        <img
          src={stainingImg.url}
          alt="Legacy Exterior Services staining a residential wood fence in DFW"
          loading="lazy"
          className="mt-8 aspect-[16/10] w-full rounded-2xl border border-border object-cover shadow-soft"
        />

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Our Story & Mission</h2>
          <div className="mt-5 space-y-4">
            {story.map((s) => (
              <div key={s.title} className="rounded-2xl border border-border bg-card p-5 shadow-soft">
                <h3 className="font-bold">{s.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Why DFW Homeowners Trust Us</h2>
          <div className="mt-5 space-y-4">
            {trust.map((s) => (
              <div key={s.title} className="rounded-2xl border border-border bg-card p-5 shadow-soft">
                <h3 className="font-bold">{s.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            ))}
          </div>

          <a
            href={GOOGLE_PROFILE_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-5 flex items-center gap-3 rounded-2xl border border-border bg-card p-5 shadow-soft"
          >
            <StarRating rating={RATING} size="size-5" />
            <span className="text-sm text-muted-foreground">
              <strong className="font-semibold text-primary">{RATING} out of 5</strong> across{" "}
              {REVIEW_COUNT} Google reviews
            </span>
          </a>
        </section>

        <div className="mt-10">
          <ConversionBlock heading="Let's take care of your exterior" />
        </div>
      </div>
    </SiteLayout>
  );
}