import type { Project } from '@/lib/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const keyPoints = project.features || project.learnings || [];
  return (
    <Card className="flex flex-col overflow-hidden transition-shadow hover:shadow-lg">
      <CardHeader>
        <div className="aspect-video overflow-hidden rounded-md border bg-gradient-to-br from-muted/20 to-muted/40 flex items-center justify-center p-8">
            <Image
                src={project.image}
                alt={`Icono del lenguaje principal del proyecto ${project.title}`}
                data-ai-hint={project.imageHint}
                width={120}
                height={120}
                className="object-contain max-w-[120px] max-h-[120px] drop-shadow-sm"
            />
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardTitle className="font-headline text-xl font-bold">{project.title}</CardTitle>
        <div className="mt-2 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary">{tech}</Badge>
          ))}
        </div>
        <p className="mt-4 text-muted-foreground">{project.summary}</p>
        <ul className="mt-4 space-y-2 text-sm">
          {keyPoints.map((point) => (
            <li key={point} className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
              <span className="text-muted-foreground">{point}</span>
            </li>
          ))}
        </ul>
        {project.result && (
            <p className="mt-4 text-sm font-semibold text-foreground italic">
              <span className="font-bold">Resultado:</span> {project.result}
            </p>
        )}
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            Ver repositorio
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
