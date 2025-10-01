import type { LucideIcon } from 'lucide-react';

export type NavItem = {
  title: string;
  href: string;
};

export type Project = {
  title: string;
  githubUrl: string;
  summary: string;
  technologies: string[];
  learnings?: string[];
  features?: string[];
  result?: string;
  image: string;
  imageHint: string;
};

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type Testimonial = {
  quote: string;
  name: string;
  company: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type ValueProposition = {
  title:string;
  icon: LucideIcon;
};

export type WorkStep = {
  step: number;
  title: string;
  description: string;
};

export type Submission = {
  name: string;
  email: string;
  company?: string;
  budget?: string;
  message: string;
}

export type AboutPageContent = {
  title: string;
  p1: string;
  p2: string;
  p3: string;
  fullBio: string[];
  stack: {
    title: string;
    frontend: {
      title: string;
      tools: string;
    };
    backend: {
      title: string;
      tools: string;
    };
    data: {
      title: string;
      tools: string;
    };
    methodologies: {
      title: string;
      tools: string;
    };
  };
  cta: {
    primaryText: string;
    primaryLink: string;
    secondaryText: string;
    secondaryLink: string;
  };
  image: string;
  imageHint: string;
};
