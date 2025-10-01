"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { navItems } from '@/lib/data';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import Image from 'next/image';

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/73824E49-1107-4E8D-BD76-7A6C0A492A05.JPG"
              alt="Retrato de Iván Vega"
              width={32}
              height={32}
              className="rounded-full object-cover"
            />
            <span className="font-bold font-headline"> <span className="text-primary">&lt;/&gt;</span> Iván Vega Hernández</span>
          </Link>
        </div>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          {navItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className={cn(
                'transition-colors hover:text-foreground/80',
                pathname === item.href ? 'text-foreground' : 'text-foreground/60'
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end gap-2">
          <ThemeToggle />
          <Button asChild className="hidden md:inline-flex" variant="outline">
            <Link href="/contacto">Contáctame</Link>
          </Button>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Abrir menú</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col gap-6 p-6">
                  <Link href="/" className="flex items-center gap-2">
                     <Image
                      "
                      alt="Retrato de Iván Vega"
                      width={32}
                      height={32}
                      className="rounded-full object-cover"
                    />
                    <span className="font-bold font-headline">Iván Vega Hdez.</span>
                  </Link>
                  <nav className="flex flex-col gap-4">
                    {navItems.map((item) => (
                      <SheetClose asChild key={item.title}>
                        <Link
                          href={item.href}
                          className={cn(
                            'text-lg font-medium transition-colors hover:text-primary',
                            pathname === item.href ? 'text-primary' : 'text-muted-foreground'
                          )}
                        >
                          {item.title}
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>
                  <SheetClose asChild>
                    <Button asChild size="lg">
                      <Link href="/contacto">Contáctame</Link>
                    </Button>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
