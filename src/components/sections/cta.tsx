import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CtaSection() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">
            Have a project in mind?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Let&apos;s build something great together. We are here to turn your vision into reality.
          </p>
          <Button variant="accent" size="lg" asChild className="mt-8">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
