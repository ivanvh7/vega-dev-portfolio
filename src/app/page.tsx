import type { Metadata } from 'next';
import Image from 'next/image';
import { projects as allProjects, aboutPage } from '@/lib/data';
import { ProjectCard } from '@/components/project-card';
import { CtaSection } from '@/components/sections/cta-section';
import { homePage } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Sobre mí y Proyectos | Iván Vega Hernández',
  description: 'Desarrollador web con experiencia en Contactel e Inerza. Enfoque en UI/UX, rendimiento y SEO técnico.',
};

export default function AboutAndProjectsPage() {
  const { title, p1, p2, p3, stack, cta, image, imageHint } = aboutPage;
  const projects = allProjects.slice(0, 4);

  return (
    <div className="container py-16 md:py-24">
      <div className="mx-auto max-w-4xl mb-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8 p-6 bg-card rounded-lg shadow-sm">
          <h1 className="font-headline text-4xl font-bold tracking-tight lg:text-5xl">Información</h1>
          <Image 
              src={image}
              alt="Retrato de Iván Vega"
              data-ai-hint={imageHint}
              width={120}
              height={120}
              className="rounded-full aspect-square object-cover shadow-lg border-4 border-background"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <aside className="md:col-span-1">
          <div className="sticky top-24">
            <h2 className="font-headline text-2xl font-bold mb-4">Acerca de:</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>{p1}</p>
              <p>{p2}</p>
              <p>{p3}</p>
            </div>
          </div>
        </aside>
        
        <main className="md:col-span-2">
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </main>
      </div>
      
       <div className="mt-16 md:mt-24">
         <CtaSection
            title={homePage.cta.title}
            subtitle={homePage.cta.subtitle}
            buttonText={homePage.cta.buttonText}
            buttonLink={homePage.cta.buttonLink}
          />
       </div>
    </div>
  );
}
