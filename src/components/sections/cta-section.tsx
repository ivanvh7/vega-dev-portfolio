import Link from 'next/link';
import { Button } from '@/components/ui/button';

type CtaSectionProps = {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
};

export function CtaSection({ title, subtitle, buttonText, buttonLink }: CtaSectionProps) {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container py-16 text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
        <p className="mt-4 text-lg text-primary-foreground/80">{subtitle}</p>
        <div className="mt-8">
          <Button asChild size="lg" variant="secondary">
            <Link href={buttonLink}>{buttonText}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
