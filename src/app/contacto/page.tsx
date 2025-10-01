import type { Metadata } from 'next';
import { contactPage } from '@/lib/data';
import { ContactSection } from '@/components/sections/contact-section';

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Cuéntame tu proyecto. Respondo con propuesta clara y siguientes pasos.',
};

export default function ContactoPage() {
  return (
    <div className="container py-16 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight lg:text-5xl">{contactPage.title}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{contactPage.description}</p>
      </div>
      <ContactSection />
    </div>
  );
}
