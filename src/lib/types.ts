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
  title: string;
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
