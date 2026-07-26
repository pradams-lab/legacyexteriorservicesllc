import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, AlertTriangle, Check } from "lucide-react";

import { SiteLayout } from "@/components/site/SiteLayout";
import { ConversionBlock } from "@/components/site/ConversionBlock";
import { getService, services, type ServicePoint } from "@/lib/site-data";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Service not found | Legacy Exterior Services" }, { name: "robots", content: "noindex" }],
      };
    }
    const { service } = loaderData;
    const title = `${service.pageHeader} | Legacy Exterior Services LLC`;
    return {
      meta: [
        { title },
        { name: "description", content: service.subHero },
        { property: "og:title", content: title },
        { property: "og:description", content: service.subHero },
      ],
    };
  },
  component: ServicePage,
});

function ServicePage() {
  const { service } = Route.useLoaderData();

  return (
    <SiteLayout>
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
        <Link
          to="/"
          hash="services"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
        >
          <ArrowLeft className="size-4" aria-hidden />
          Back to Main Services
        </Link>

        <h1 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl">{service.pageHeader}</h1>
        <p className="mt-4 text-base leading-relaxed text-foreground/80 sm:text-lg">
          {service.subHero}
        </p>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">The Core Problem</h2>
          <div className="mt-5 space-y-4">
            {service.problem.map((p: ServicePoint) => (
              <div key={p.title} className="flex gap-3 rounded-2xl border border-border bg-card p-5 shadow-soft">
                <AlertTriangle className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden />
                <div>
                  <h3 className="font-bold">{p.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Our Professional Solution</h2>
          <div className="mt-5 space-y-4">
            {service.solution.map((p: ServicePoint) => (
              <div key={p.title} className="flex gap-3 rounded-2xl border border-border bg-card p-5 shadow-soft">
                <Check className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden />
                <div>
                  <h3 className="font-bold">{p.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-10">
          <ConversionBlock heading={`Ready for ${service.name.toLowerCase()}?`} />
        </div>

        <section className="mt-12">
          <h2 className="text-lg font-bold">Other services</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {services
              .filter((s) => s.slug !== service.slug)
              .map((s) => (
                <li key={s.slug}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="block rounded-xl border border-border bg-card px-4 py-3 text-sm font-semibold text-primary shadow-soft transition-shadow hover:shadow-lift"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
          </ul>
        </section>
      </div>
    </SiteLayout>
  );
}