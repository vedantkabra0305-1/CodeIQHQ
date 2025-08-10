import Link from "next/link";
import { contactDetails, navLinks } from "@/lib/constants";
import { Logo } from "../shared/logo";
import { Button } from "../ui/button";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="flex flex-col gap-4 md:col-span-4">
            <Link href="/" className="flex items-center gap-2">
              <Logo className="[&>span]:text-primary-foreground" />
            </Link>
            <p className="text-primary-foreground/70">
              Building the future, one line of code at a time.
            </p>
          </div>
          <div className="md:col-span-2">
            <h4 className="font-headline font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2">
             <h4 className="font-headline font-semibold mb-4">Connect</h4>
             <ul className="space-y-2">
                {contactDetails.socials.map((social) => (
                    <li key={social.name}>
                        <a href={social.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                            <social.Icon className="h-5 w-5"/>
                            {social.name}
                        </a>
                    </li>
                ))}
             </ul>
          </div>
          <div className="flex flex-col gap-4 md:col-span-4">
            <h4 className="font-headline font-semibold">Get in Touch</h4>
            <p className="text-primary-foreground/70">
              Have a project in mind? Let's talk about it.
            </p>
            <Button variant="accent" asChild>
              <a href={`mailto:${contactDetails.email}`}>Contact Us</a>
            </Button>
          </div>
        </div>
        <div className="mt-8 border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/50">
          <p>&copy; {new Date().getFullYear()} CodeIQ Digital Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
