import { CallButton, QuoteButton } from "./Buttons";

export function ConversionBlock({ heading }: { heading?: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8">
      <h3 className="text-xl font-bold sm:text-2xl">
        {heading ?? "Get your free estimate today"}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        Speak with a real person about your property — no pressure, no obligation.
      </p>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <CallButton className="sm:flex-1" />
        <QuoteButton className="sm:flex-1" label="Get Your Free Online Estimate" />
      </div>
    </div>
  );
}