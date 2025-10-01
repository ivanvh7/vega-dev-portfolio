import type { Metadata } from 'next';
import { projects as allProjects, aboutPage } from '@/lib/data';
import { ProjectCard } from '@/components/project-card';
import { CtaSection } from '@/components/sections/cta-section';
import { homePage } from '@/lib/data';
import { Code2 } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Sobre mí y Proyectos | Iván Vega Hernández',
  description: 'Desarrollador web con experiencia en Contactel e Inerza. Enfoque en UI/UX, rendimiento y SEO técnico.',
};

export default function AboutAndProjectsPage() {
  const { title, p1, p2, p3, stack, cta, image, imageHint, fullBio } = aboutPage;
  const projects = allProjects.slice(0, 4);

  return (
    <div className="container py-16 md:py-24">
      <div className="mx-auto max-w-4xl mb-12">
        <div className="flex flex-col items-center justify-center gap-8 p-6 bg-card rounded-lg shadow-sm text-center">
            <div className="flex items-center gap-3">
                <h1 className="font-headline text-4xl font-bold tracking-tight lg:text-5xl">Iván Vega</h1>
                 <Image
                    src="https://storage.googleapis.com/aifirebase/images/k2CaxK7s21g/man-in-suit-posing-for-a-picture-in-a-mirror_1.png"
                    alt="Retrato de Iván Vega"
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                />
            </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <aside className="md:col-span-1">
          <div className="sticky top-24">
            <h2 className="font-headline text-2xl font-bold mb-4">Acerca de mí</h2>
            <div className="space-y-4 text-muted-foreground">
              {fullBio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
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
