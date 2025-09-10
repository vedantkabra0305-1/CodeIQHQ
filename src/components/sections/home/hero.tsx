import { Button } from "@/components/ui/button";
import { Typewriter } from "@/components/shared/typewriter";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-background">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up space-y-6 text-center md:text-left">
            <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary leading-tight">
              <Typewriter text="Turn Ideas Into Reality." />
            </h1>
            <p className="text-lg text-muted-foreground">
              CodeIQ is a premier software development agency specializing in crafting exceptional web and mobile applications. We partner with you to bring your vision to life.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <Button size="lg" asChild className="transform hover:scale-105 transition-transform">
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="transform hover:scale-105 transition-transform">
                <Link href="/portfolio">Our Work</Link>
              </Button>
            </div>
          </div>
          <div className="animate-fade-up [animation-delay:200ms]">
            <Image 
              src="https://i.postimg.cc/hPWQxzq7/Screenshot-2025-08-10-at-8-32-41-PM.png"
              alt="Laptop with CodeIQ logo"
              width={600}
              height={400}
              className="rounded-lg shadow-xl mx-auto"
              data-ai-hint="laptop code"
              priority
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAQABQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
          </div>
        </div>
      </div>
    </section>
  );
}
