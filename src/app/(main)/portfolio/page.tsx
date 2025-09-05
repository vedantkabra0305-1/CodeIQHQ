import { portfolioProjects } from "@/lib/constants";
import PortfolioClient from "@/components/sections/portfolio-client";

const categories = ["All", "Web", "Mobile", "AI Agent"];

export default function PortfolioPage() {
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
        <PortfolioClient categories={categories} projects={portfolioProjects} />
      </section>
    </>
  );
}
