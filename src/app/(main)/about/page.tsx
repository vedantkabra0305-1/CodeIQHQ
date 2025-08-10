import { aboutContent } from "@/lib/constants";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CtaSection from "@/components/sections/cta";
import { BrainCircuit, HeartHandshake, Users, CheckCircle } from "lucide-react";

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
              We are a digital agency that crafts human-centered experiences by blending intelligent design with emotional connection.
            </p>
          </div>
        </div>
      </section>

      <section className="py-0 pb-16 md:pb-24 lg:pb-32">
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
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="animate-fade-up" style={{ animationDelay: '100ms' }}>
              <CardHeader>
                <CardTitle className="font-headline text-2xl font-bold mb-2 text-primary">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {aboutContent.mission.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="animate-fade-up" style={{ animationDelay: '200ms' }}>
              <CardHeader>
                <CardTitle className="font-headline text-2xl font-bold mb-2 text-primary">Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                 <ul className="space-y-3">
                  {aboutContent.values.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="max-w-4xl mx-auto text-center animate-fade-up" style={{ animationDelay: '300ms' }}>
            <h2 className="font-headline text-3xl font-bold mb-4 text-primary">Our Story</h2>
            <p className="text-muted-foreground text-lg">{aboutContent.story}</p>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
