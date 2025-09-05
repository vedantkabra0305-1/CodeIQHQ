"use client";

import { useState } from "react";
import { portfolioProjects } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { X, ExternalLink } from "lucide-react";

type Project = typeof portfolioProjects[0];

const categories = ["All", "Web", "Mobile", "AI Agent"];

export default function PortfolioPage() {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    filter === "All"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === filter);

  return (
    <>
      <section className="animate-fade-up">
        <div className="container text-center">
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">Our Work</h1>
          <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore a selection of projects that showcase our commitment to quality and innovation.
          </p>
        </div>
      </section>
      
      <section className="py-0">
        <div className="container">
          <div className="flex justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category)}
                className="transition-all"
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={project.id}
                className="group overflow-hidden cursor-pointer animate-fade-up shadow-lg hover:shadow-xl transition-shadow duration-300"
                onClick={() => setSelectedProject(project)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                    data-ai-hint={project.dataAiHint}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                </div>
                <CardContent className="p-4">
                  <Badge variant="secondary" className="mb-2">{project.category}</Badge>
                  <h3 className="font-headline text-xl font-bold">{project.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl p-0">
          {selectedProject && (
            <>
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                width={800}
                height={400}
                className="w-full h-64 object-cover rounded-t-lg"
                data-ai-hint={selectedProject.dataAiHint}
              />
              <DialogHeader className="p-6">
                <Badge variant="secondary" className="w-fit mb-2">{selectedProject.category}</Badge>
                <DialogTitle className="font-headline text-3xl">{selectedProject.title}</DialogTitle>
              </DialogHeader>
              <div className="px-6 pb-6 space-y-6">
                <div>
                    <h4 className="font-semibold font-headline mb-2 text-primary">About the Project</h4>
                    <p className="text-muted-foreground">{selectedProject.description}</p>
                </div>
                <div>
                    <h4 className="font-semibold font-headline mb-2 text-primary">Tools & Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                        {selectedProject.tools.map(tool => (
                            <Badge key={tool} variant="outline">{tool}</Badge>
                        ))}
                    </div>
                </div>
                 <div>
                    <h4 className="font-semibold font-headline mb-2 text-primary">Results</h4>
                    <p className="text-muted-foreground">{selectedProject.results}</p>
                </div>
                <Button asChild>
                  <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">
                    Learn More <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
               <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </DialogClose>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
