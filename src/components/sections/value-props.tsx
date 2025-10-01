import { homePage } from '@/lib/data';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';

export function ValueProps() {
  return (
    <section className="container py-16">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {homePage.valueProps.map((prop) => (
          <Card key={prop.title} className="bg-transparent border-none shadow-none">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="rounded-full bg-primary/10 p-3">
                <prop.icon className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="font-medium text-lg">{prop.title}</CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}
