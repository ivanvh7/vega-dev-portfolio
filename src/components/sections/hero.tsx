import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { homePage } from '@/lib/data';
import { Accessibility } from 'lucide-react';

export function Hero() {
  return (
    <section className="container py-20 text-center md:py-32">
      <div className="mx-auto max-w-4xl">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          {homePage.hero.h1}
        </h1>
        <h2 className="mt-6 text-lg font-medium text-muted-foreground sm:text-xl md:text-2xl">
          {homePage.hero.h2}
        </h2>
        <p className="mt-6 max-w-2xl mx-auto text-base text-muted-foreground md:text-lg">
          {homePage.hero.intro}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/proyectos">{homePage.hero.ctaPrimary}</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/contacto">{homePage.hero.ctaSecondary}</Link>
          </Button>
        </div>
        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <Accessibility className="h-4 w-4" />
          <span>{homePage.hero.accessibilityMicrocopy}</span>
        </div>
      </div>
    </section>
  );
}
