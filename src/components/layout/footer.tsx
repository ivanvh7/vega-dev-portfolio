import Link from 'next/link';
import { Github } from 'lucide-react';
import { navItems, footer as footerData } from '@/lib/data';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-card">
      <div className="container py-8">
        <div className="flex flex-col-reverse items-center justify-between gap-8 md:flex-row">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              {footerData.text.replace('{year}', currentYear.toString())}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <nav className="flex items-center gap-4 text-sm font-medium">
              {navItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.title}
                </Link>
              ))}
            </nav>
            <a
              href={footerData.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
