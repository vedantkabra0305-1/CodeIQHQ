import { portfolioProjects } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function PortfolioOverview() {
  const featuredProjects = portfolioProjects.slice(0, 4);

  return (
    <section>
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">Featured Projects</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A glimpse into the innovative solutions we&apos;ve delivered for our clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <Link href="/portfolio" key={project.id}>
              <Card 
                className="group overflow-hidden relative animate-fade-up shadow-lg hover:shadow-xl transition-shadow duration-300"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  data-ai-hint={project.dataAiHint}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <CardContent className="absolute bottom-0 left-0 p-6 text-primary-foreground">
                  <Badge variant="secondary" className="mb-2">{project.category}</Badge>
                  <h3 className="font-headline text-2xl font-bold">{project.title}</h3>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
