import { projects as allProjects, projectsPage } from '@/lib/data';
import { ProjectCard } from '@/components/project-card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

type ProjectsSectionProps = {
  featured?: boolean;
};

export function ProjectsSection({ featured = false }: ProjectsSectionProps) {
  const projects = featured ? allProjects.slice(0, 2) : allProjects;

  return (
    <section className="py-16 md:py-24 bg-card" id="proyectos">
      <div className="container">
        {featured && (
          <div className="mb-12 text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
              {projectsPage.title}
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              {projectsPage.intro}
            </p>
          </div>
        )}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
        {featured && (
          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link href="/proyectos">Ver todos los proyectos</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
