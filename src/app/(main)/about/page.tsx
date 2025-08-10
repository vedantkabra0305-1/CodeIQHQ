import { aboutContent } from "@/lib/constants";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CtaSection from "@/components/sections/cta";
import { BrainCircuit, HeartHandshake, Users } from "lucide-react";

const quotients = [
  {
    icon: BrainCircuit,
    title: "Intellectual Quotient",
    description: "We leverage cutting-edge technology and deep industry knowledge to build intelligent, high-performance digital solutions that solve real-world problems.",
    delay: "100ms",
  },
  {
    icon: HeartHandshake,
    title: "Emotional Quotient",
    description: "We believe in building with empathy. Our design process focuses on creating intuitive and engaging user experiences that connect with people on a human level.",
    delay: "200ms",
  },
  {
    icon: Users,
    title: "Social Quotient",
    description: "Collaboration is at our core. We build strong partnerships with our clients and foster a community of open communication and shared success.",
    delay: "300ms",
  },
];

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

      <section className="py-0">
        <div className="container">
           <div className="grid md:grid-cols-3 gap-8">
            {quotients.map((item) => (
              <Card 
                key={item.title} 
                className="text-center animate-fade-up"
                style={{ animationDelay: item.delay }}
              >
                <CardHeader className="items-center">
                   <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mb-4">
                     <item.icon className="w-8 h-8" />
                   </div>
                  <CardTitle className="font-headline text-2xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
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

      <CtaSection />
    </>
  );
}
