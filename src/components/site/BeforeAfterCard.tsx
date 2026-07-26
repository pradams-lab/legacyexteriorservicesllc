export function BeforeAfterCard({
  src,
  alt,
  title,
  caption,
}: {
  src: string;
  alt: string;
  title: string;
  caption: string;
}) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
      <img src={src} alt={alt} loading="lazy" className="aspect-[16/9] w-full object-cover" />
      <figcaption className="p-5">
        <h3 className="text-base font-bold">{title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{caption}</p>
      </figcaption>
    </figure>
  );
}