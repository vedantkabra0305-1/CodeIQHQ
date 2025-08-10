
"use client";

import { useState } from "react";
import { services } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const serviceImages: { [key: string]: string } = {
  "Web Development": "https://i.postimg.cc/mZvv3RDn/Screenshot-2025-08-10-at-8-39-46-PM.png",
  "Mobile App Development": "https://i.postimg.cc/9Qpsj7p3/Screenshot-2025-08-10-at-8-40-15-PM.png",
  "AI Agents": "https://i.postimg.cc/sgyb8c59/Screenshot-2025-08-10-at-8-39-54-PM.png",
};

export default function ServicesOverview() {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <section className="bg-secondary">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">Our Expertise</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We provide a complete suite of services to transform your ideas into successful digital products.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-4">
            {services.map((service) => (
              <div
                key={service.title}
                onMouseEnter={() => setActiveService(service)}
                className={cn(
                  "p-6 rounded-lg cursor-pointer transition-all duration-300 border",
                  activeService.title === service.title
                    ? "bg-background shadow-lg border-primary"
                    : "bg-background/50 border-transparent"
                )}
              >
                <div className="flex items-center gap-4">
                  <div className={cn(
                    "w-12 h-12 rounded-lg flex items-center justify-center transition-colors",
                     activeService.title === service.title ? "bg-primary text-primary-foreground" : "bg-muted text-primary"
                  )}>
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-headline text-xl font-bold text-primary">{service.title}</h3>
                </div>
              </div>
            ))}
          </div>
          
          <div className="relative h-96">
            {services.map((service) => (
              <div
                key={service.title}
                className={cn(
                  "absolute inset-0 transition-opacity duration-300 flex flex-col items-center justify-center text-center",
                  activeService.title === service.title ? "opacity-100" : "opacity-0"
                )}
              >
                <Image
                  src={serviceImages[service.title]}
                  alt={service.title}
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl mb-6 object-cover h-64 w-full"
                  data-ai-hint={service.title.toLowerCase().replace(/ /g, '-')}
                />
                <p className="text-muted-foreground mb-4">{service.description}</p>
                 <Button asChild variant="link" className="text-accent">
                   <Link href="/services">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                   </Link>
                 </Button>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-16">
           <Button asChild size="lg">
             <Link href="/services">Explore All Services</Link>
           </Button>
         </div>
      </div>
    </section>
  );
}
