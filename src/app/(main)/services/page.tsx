import { services } from "@/lib/constants";
import Image from "next/image";
import CtaSection from "@/components/sections/cta";
import { CheckCircle } from "lucide-react";

const serviceFeatures = {
  "Web Development": ["Custom Web Applications", "E-commerce Solutions", "Content Management Systems", "API Development"],
  "Mobile App Development": ["iOS & Android Apps", "Cross-Platform Development", "App Maintenance & Support", "Push Notifications"],
  "UI/UX Design": ["User Research & Personas", "Wireframing & Prototyping", "Usability Testing", "Design Systems"],
};

export default function ServicesPage() {
  return (
    <>
      <section className="animate-fade-up">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">Our Services</h1>
            <p className="mt-4 text-xl text-muted-foreground">
              Comprehensive solutions to power your digital growth.
            </p>
          </div>
        </div>
      </section>

      <div className="space-y-16 md:space-y-24">
        {services.map((service, index) => (
          <section key={service.title} className="py-0">
            <div className="container">
              <div className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:grid-flow-row-dense' : ''}`}>
                <div className={`animate-fade-up ${index % 2 === 1 ? 'md:col-start-2' : ''}`} style={{ animationDelay: '100ms' }}>
                  <Image
                    src={`https://placehold.co/600x450.png`}
                    alt={service.title}
                    width={600}
                    height={450}
                    className="rounded-lg shadow-xl"
                    data-ai-hint={service.title.toLowerCase().replace(/ /g, '-')}
                  />
                </div>
                <div className="animate-fade-up" style={{ animationDelay: '200ms' }}>
                  <h2 className="font-headline text-3xl font-bold text-primary mb-4">{service.title}</h2>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {serviceFeatures[service.title as keyof typeof serviceFeatures].map(feature => (
                       <li key={feature} className="flex items-center gap-3">
                         <CheckCircle className="w-5 h-5 text-accent" />
                         <span className="text-foreground">{feature}</span>
                       </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      <CtaSection />
    </>
  );
}
