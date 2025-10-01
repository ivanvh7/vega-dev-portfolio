import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { servicesPage } from "@/lib/data";

export function Faq() {
  const { title, items } = servicesPage.faqs;
  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-12 text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          {title}
        </h2>
      </div>
      <Accordion type="single" collapsible className="w-full">
        {items.map((faq, index) => (
          <AccordionItem value={`item-${index}`} key={faq.question}>
            <AccordionTrigger className="text-left text-lg font-medium hover:no-underline">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
