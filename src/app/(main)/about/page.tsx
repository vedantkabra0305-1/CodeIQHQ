import { aboutContent, founders } from "@/lib/constants";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CtaSection from "@/components/sections/cta";

export default function AboutPage() {
  return (
    <>
      <section className="animate-fade-up">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">About CodeIQ</h1>
            <p className="mt-4 text-xl text-muted-foreground">
              We&apos;re a team of passionate creators dedicated to building exceptional digital experiences.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="animate-fade-up [animation-delay:100ms]">
              <h2 className="font-headline text-2xl font-bold mb-4 text-primary">Our Mission</h2>
              <p className="text-muted-foreground">{aboutContent.mission}</p>
            </div>
            <div className="animate-fade-up [animation-delay:200ms]">
              <h2 className="font-headline text-2xl font-bold mb-4 text-primary">Our Values</h2>
              <p className="text-muted-foreground">{aboutContent.values}</p>
            </div>
            <div className="animate-fade-up [animation-delay:300ms]">
              <h2 className="font-headline text-2xl font-bold mb-4 text-primary">Our Story</h2>
              <p className="text-muted-foreground">{aboutContent.story}</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">Meet Our Founders</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The leaders guiding our mission to deliver excellence.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {founders.map((founder, index) => (
              <Card 
                key={founder.name} 
                className="text-center animate-fade-up overflow-hidden"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader>
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    width={150}
                    height={150}
                    className="rounded-full mx-auto mb-4 shadow-lg"
                    data-ai-hint={founder.dataAiHint}
                  />
                  <CardTitle className="font-headline text-2xl">{founder.name}</CardTitle>
                  <p className="text-accent font-semibold">{founder.title}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{founder.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
