import type { Metadata } from 'next';
import { services, servicesPage } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CtaSection } from '@/components/sections/cta-section';
import { Faq } from '@/components/sections/faq';
import { Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Servicios de Desarrollo Web (React/Next.js, Node.js)',
  description: 'Desarrollo frontend, backends y APIs, performance y SEO técnico, mantenimiento. Proceso claro y resultados.',
};

export default function ServicesPage() {
  const { title, workProcess, cta } = servicesPage;
  return (
    <>
      <div className="container py-16 md:py-24">
        <div className="mb-12 text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight lg:text-5xl">{title}</h1>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {services.map((service) => (
            <Card key={service.title} className="flex">
              <div className="p-6 pr-0">
                  <div className="rounded-full bg-primary/10 p-3 flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-primary" />
                  </div>
              </div>
              <CardHeader className="flex-1">
                <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
                <CardContent className="p-0 pt-2 text-muted-foreground">{service.description}</CardContent>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
      
      <div className="py-16 md:py-24 bg-card">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">{workProcess.title}</h2>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 top-4 hidden h-[calc(100%-2rem)] w-0.5 -translate-x-1/2 bg-border md:block" aria-hidden="true"></div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {workProcess.steps.map((step, index) => (
                <div key={step.step} className="relative flex flex-col items-center text-center">
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <span className="text-xl font-bold">{step.step}</span>
                  </div>
                  <h3 className="mt-4 font-headline text-xl font-semibold">{step.title}</h3>
                  <p className="mt-2 text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="container py-16 md:py-24">
        <Faq />
      </div>

      <CtaSection
        title={cta.title}
        subtitle={cta.subtitle}
        buttonText={cta.buttonText}
        buttonLink={cta.buttonLink}
      />
    </>
  );
}
