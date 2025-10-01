import { Hero } from '@/components/sections/hero';
import { TrustStrip } from '@/components/sections/trust-strip';
import { ValueProps } from '@/components/sections/value-props';
import { ProjectsSection } from '@/components/sections/projects-section';
import { Testimonials } from '@/components/sections/testimonials';
import { CtaSection } from '@/components/sections/cta-section';
import { homePage } from '@/lib/data';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <TrustStrip />
      <ValueProps />
      <ProjectsSection featured />
      <Testimonials />
      <CtaSection
        title={homePage.cta.title}
        subtitle={homePage.cta.subtitle}
        buttonText={homePage.cta.buttonText}
        buttonLink={homePage.cta.buttonLink}
      />
    </div>
  );
}
