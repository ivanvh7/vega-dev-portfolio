import type { Metadata } from 'next';
import { ProjectsSection } from '@/components/sections/projects-section';
import { CtaSection } from '@/components/sections/cta-section';
import { projectsPage } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Proyectos',
  description: 'Selección de proyectos en JavaScript/TypeScript, React/Next.js y Node.js. Repos públicos en GitHub @ivanvh7.',
};

const siteUrl = 'https://vegadev.vercel.app';

export default function ProjectsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context":"https://schema.org",
          "@type":"CollectionPage",
          "name":"Proyectos — Iván Vega Hernández",
          "url":`${siteUrl}/proyectos`,
          "about":["JavaScript","TypeScript","React","Next.js","Node.js"]
        }) }}
        key="collection-page-ld"
      />
      <div className="container pt-16 pb-24 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight lg:text-5xl">{projectsPage.title}</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">{projectsPage.intro}</p>
      </div>
      <ProjectsSection />
      <CtaSection
        title={projectsPage.cta.title}
        subtitle={projectsPage.cta.subtitle}
        buttonText={projectsPage.cta.buttonText}
        buttonLink={projectsPage.cta.buttonLink}
      />
    </>
  );
}
