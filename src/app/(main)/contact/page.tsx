import { ContactForm } from "@/components/sections/contact-form";
import { contactDetails } from "@/lib/constants";
import { Mail, Instagram } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <section className="animate-fade-up">
        <div className="container text-center">
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">Contact Us</h1>
          <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
            We&apos;d love to hear from you. Fill out the form below or reach out to us directly.
          </p>
        </div>
      </section>

      <section className="py-0">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-secondary p-8 rounded-lg animate-fade-up transition-all duration-300 hover:shadow-xl" style={{animationDelay: '100ms'}}>
              <h2 className="font-headline text-2xl font-bold text-primary mb-6">Send us a message</h2>
              <ContactForm />
            </div>
            <div className="space-y-8 animate-fade-up" style={{animationDelay: '200ms'}}>
              <div>
                <h3 className="font-headline text-2xl font-bold text-primary mb-4">Contact Information</h3>
                <p className="text-muted-foreground mb-6">
                  Our team is available to answer your questions and discuss your project needs.
                </p>
                <div className="space-y-4">
                  <a href={`mailto:${contactDetails.email}`} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors">
                       <Mail className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div>
                      <p className="font-semibold text-primary">Email</p>
                      <p className="text-muted-foreground group-hover:text-accent transition-colors">{contactDetails.email}</p>
                    </div>
                  </a>
                  {contactDetails.socials.map((social) => (
                    <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                      <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors">
                        <social.Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                      <div>
                        <p className="font-semibold text-primary">{social.name}</p>
                        <p className="text-muted-foreground group-hover:text-accent transition-colors">{social.handle}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}