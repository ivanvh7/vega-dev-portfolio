import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from "@/components/ui/toaster";
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const siteUrl = 'https://vegadev.vercel.app'; // Using a placeholder deployment URL

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Iván Vega Hernández — Desarrollador Web (React, Next.js, Node.js)',
    template: '%s | Iván Vega Hernández',
  },
  description: 'Desarrollador web con experiencia en Contactel e Inerza. Construyo aplicaciones rápidas y accesibles con React/Next.js y Node.js. Mira mis proyectos y contáctame.',
  keywords: ['desarrollador web', 'React', 'Next.js', 'Node.js', 'TypeScript', 'portfolio', 'Canarias', 'España', 'freelance'],
  openGraph: {
    title: 'Iván Vega Hernández — Desarrollador Web',
    description: 'Construyo aplicaciones rápidas, accesibles y escalables con React/Next.js y Node.js.',
    type: 'website',
    url: siteUrl,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Iván Vega Hernández - Desarrollador Web',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Iván Vega Hernández — Desarrollador Web',
    description: 'Construyo aplicaciones rápidas, accesibles y escalables con React/Next.js y Node.js.',
    images: [`${siteUrl}/og-image.jpg`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Iván Vega Hernández",
            "jobTitle": "Desarrollador Web Full-Stack",
            "affiliation": [
              {"@type":"Organization","name":"Contactel"},
              {"@type":"Organization","name":"Inerza"}
            ],
            "url": siteUrl,
            "sameAs": [
              "https://github.com/ivanvh7"
            ],
            "knowsAbout": ["JavaScript","TypeScript","React","Next.js","Node.js","Express","SEO","Accesibilidad Web"]
          }) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context":"https://schema.org",
            "@type":"WebSite",
            "name":"Iván Vega Hernández — Portfolio",
            "url":siteUrl,
            "potentialAction":{
              "@type":"SearchAction",
              "target":`${siteUrl}/proyectos?q={search_term_string}`,
              "query-input":"required name=search_term_string"
            }
          }) }}
        />
      </head>
      <body className="font-body antialiased">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
