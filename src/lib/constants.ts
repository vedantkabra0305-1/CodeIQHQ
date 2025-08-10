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
    title: "ConnectApp",
    category: "Mobile",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "mobile app screen",
    description: "A cross-platform mobile app for social networking. Features real-time chat, media sharing, and a sophisticated recommendation engine. Built to scale and handle thousands of concurrent users, providing a smooth and reliable social experience.",
    tools: ["React Native", "Firebase", "Redux Toolkit", "Node.js"],
    results: "Achieved 100,000+ downloads in the first three months on both App Store and Google Play, with an average rating of 4.8 stars.",
    link: "#",
  },
  {
    id: 3,
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
    id: 4,
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
    title: "CEO, Innovate Inc.",
    avatar: "https://placehold.co/100x100.png",
    dataAiHint: "woman professional portrait",
  },
  {
    quote: "The level of detail and commitment from CodeIQ was outstanding. They are true partners in development, not just a vendor.",
    name: "John Smith",
    title: "CTO, Tech Solutions",
    avatar: "https://placehold.co/100x100.png",
    dataAiHint: "man professional portrait",
  },
  {
    quote: "From UI/UX to deployment, every step was handled with expertise. We couldn't be happier with our new mobile app.",
    name: "Emily White",
    title: "Product Manager, MobileFirst",
    avatar: "https://placehold.co/100x100.png",
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
  mission: "Our mission is to empower businesses by transforming their innovative ideas into robust, scalable, and user-friendly digital products. We are committed to excellence, collaboration, and driving success for our clients.",
  values: "We believe in transparency, continuous learning, and building long-term partnerships. Our core values guide every project, ensuring we deliver not just code, but value and trust.",
  story: "Founded in 2020 by a group of passionate developers and designers, CodeIQ started with a simple goal: to build software that makes a difference. Frustrated with the disconnect between client vision and developer execution, we set out to create an agency that prioritizes clear communication and a shared understanding of success. Today, we've helped dozens of startups and established companies launch products that users love.",
};

export const founders = [
  {
    name: "Alex Johnson",
    title: "Co-Founder & CEO",
    image: "https://placehold.co/400x400.png",
    dataAiHint: "man ceo portrait",
    bio: "With over 15 years in tech, Alex leads CodeIQ with a focus on strategy and client success. He's passionate about bridging the gap between business goals and technical execution."
  },
  {
    name: "Samantha Lee",
    title: "Co-Founder & CTO",
    image: "https://placehold.co/400x400.png",
    dataAiHint: "woman cto portrait",
    bio: "Samantha is the technical powerhouse behind CodeIQ. She architects complex systems and leads our development team, ensuring we use the best technologies for the job."
  }
];
