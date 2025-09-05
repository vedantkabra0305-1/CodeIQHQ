import { Monitor, TabletSmartphone, BrainCircuit, Instagram, Linkedin } from "lucide-react";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export const services = [
  {
    icon: Monitor,
    title: "Web Development",
    description: "Building responsive, high-performance websites and web applications tailored to your business needs, from stunning landing pages to complex enterprise-level systems.",
  },
  {
    icon: TabletSmartphone,
    title: "Mobile App Development",
    description: "Creating intuitive and engaging iOS and Android applications to connect with your users on the go. We build native and cross-platform apps that deliver seamless experiences.",
  },
  {
    icon: BrainCircuit,
    title: "AI Agents",
    description: "Developing intelligent AI agents and integrating them into your business workflows to automate tasks, enhance user experiences, and drive efficiency.",
  },
];

export const portfolioProjects = [
  {
    id: 1,
    title: "Agent Dashboard",
    category: "Web",
    image: "https://i.postimg.cc/3whCNyx3/Screenshot-2025-08-10-at-3-47-31-PM.png",
    dataAiHint: "agent dashboard",
    description: "A comprehensive web platform for data analytics for a leading fintech company. We delivered a fully responsive, real-time dashboard that allows users to visualize complex financial data with ease. The project involved a custom design system to ensure brand consistency.",
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts", "Firebase"],
    results: "Increased user engagement by 40% and reduced data processing time by half. The new platform has become an indispensable tool for their financial analysis team.",
    link: "https://subtle-gingersnap-49c6a3.netlify.app/",
  },
  {
    id: 2,
    title: "E-commerce Redesign",
    category: "Web",
    image: "https://i.postimg.cc/j214SZL1/Screenshot-2025-08-10-at-3-47-22-PM.png",
    dataAiHint: "e-commerce website",
    description: "Complete UI/UX redesign for a leading e-commerce brand. We conducted extensive user research to identify pain points and opportunities, resulting in a streamlined checkout process, improved product discovery, and a visually stunning interface.",
    tools: ["Figma", "Adobe XD", "UserTesting.com", "Hotjar"],
    results: "Resulted in a 25% increase in conversion rate and a significant drop in cart abandonment, directly impacting the client's bottom line.",
    link: "https://redemp.in/",
  },
  {
    id: 3,
    title: "Voice AI Agent",
    category: "AI Agent",
    image: "https://i.postimg.cc/CMB98brs/Screenshot-2025-08-10-at-7-13-41-PM.png",
    dataAiHint: "voice ai agent",
    description: "A sophisticated Voice AI Agent designed to provide real-time information and assistance. This project showcases our ability to build complex, interactive AI-powered applications with a seamless user experience.",
    tools: ["Next.js", "Genkit", "Firebase", "AI/ML"],
    results: "Successfully deployed a highly responsive and intelligent voice agent, capable of handling complex user queries with high accuracy and low latency.",
    link: "https://f1-oracale-ai-438444544657.us-west1.run.app/",
  }
];

export const testimonials = [
  {
    quote: "CodeIQ transformed our vision into a reality. Their team is professional, skilled, and incredibly easy to work with. The final product exceeded all our expectations.",
    name: "Jane Doe",
    title: "Client",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    dataAiHint: "woman professional portrait",
  },
  {
    quote: "The level of detail and commitment from CodeIQ was outstanding. They are true partners in development, not just a vendor.",
    name: "John Smith",
    title: "Client",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    dataAiHint: "man professional portrait",
  },
  {
    quote: "From UI/UX to deployment, every step was handled with expertise. We couldn't be happier with our new mobile app.",
    name: "Emily White",
    title: "Client",
    avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    dataAiHint: "woman smiling",
  },
];

export const contactDetails = {
    email: "client.codeiq@gmail.com",
    socials: [
        {
            name: "Instagram",
            handle: "@CodeIQhq",
            href: "https://www.instagram.com/CodeIQhq",
            Icon: Instagram,
        },
        {
            name: "LinkedIn",
            handle: "CodeIQ",
            href: "https://www.linkedin.com/company/codeiqhq/",
            Icon: Linkedin
        }
    ]
};

export const aboutContent = {
  mission: [
    "Empower businesses with robust, scalable, and user-friendly digital products.",
    "Commit to excellence, collaboration, and driving client success.",
    "Transform innovative ideas into tangible, market-ready solutions.",
  ],
  values: [
    "Build long-term partnerships based on transparency and trust.",
    "Foster a culture of continuous learning and improvement.",
    "Deliver not just code, but measurable value and impact.",
  ],
  story: "Founded in 2020 by a group of passionate developers and designers, CodeIQ started with a simple goal: to build software that makes a difference. Frustrated with the disconnect between client vision and developer execution, we set out to create an agency that prioritizes clear communication and a shared understanding of success. Today, we've helped dozens of startups and established companies launch products that users love.",
};
