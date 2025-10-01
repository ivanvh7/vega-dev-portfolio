import { homePage } from '@/lib/data';

export function TrustStrip() {
  return (
    <section className="bg-muted/50 py-8">
      <div className="container">
        <div className="flex flex-col items-center justify-center gap-6 text-center sm:flex-row sm:gap-8">
          <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            {homePage.trustStrip.title}
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {homePage.trustStrip.logos.map((logo) => (
              <span key={logo.name} className="text-xl font-semibold text-foreground/80">
                {logo.text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
