import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { aboutPage } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Download, Github } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sobre mí',
  description: 'Desarrollador web con experiencia en Contactel e Inerza. Enfoque en UI/UX, rendimiento y SEO técnico.',
};

export default function AboutPage() {
  const { title, p1, p2, p3, stack, cta, image, imageHint } = aboutPage;
  return (
    <div className="container py-16 md:py-24">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
        <div className="md:col-span-2">
          <h1 className="font-headline text-4xl font-bold tracking-tight lg:text-5xl">{title}</h1>
          <div className="mt-6 space-y-4 text-lg text-muted-foreground">
            <p>{p1}</p>
            <p>{p2}</p>
            <p>{p3}</p>
          </div>
          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row">
            <Button asChild size="lg">
              <a href={cta.primaryLink} download>
                <Download className="mr-2 h-4 w-4" />
                {cta.primaryText}
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={cta.secondaryLink} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                {cta.secondaryText}
              </a>
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-center">
            <Image 
                src={'https://storage.googleapis.com/aifirebase/images/k2CaxK7s21g/man-in-suit-posing-for-a-picture-in-a-mirror_1.png'}
                alt="Retrato de Iván Vega"
                data-ai-hint={imageHint}
                width={300}
                height={300}
                className="rounded-full aspect-square object-cover shadow-lg border-4 border-card"
            />
        </div>
      </div>
      
      <div className="mt-16 md:mt-24">
        <h2 className="font-headline text-3xl font-bold text-center tracking-tight sm:text-4xl">{stack.title}</h2>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {Object.values(stack).filter(s => typeof s === 'object').map((s: any) => (
            <Card key={s.title}>
              <CardHeader>
                <CardTitle className="font-headline">{s.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{s.tools}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
