import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { services } from "@/lib/constants";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ServicesOverview() {
  return (
    <section className="bg-secondary">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">Our Expertise</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We provide a complete suite of services to transform your ideas into successful digital products.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="animate-fade-up text-center shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader>
                <div className="mx-auto bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <service.icon className="w-8 h-8" />
                </div>
                <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline">
            <Link href="/services">Learn More About Our Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
