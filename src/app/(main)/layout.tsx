"use client"

import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { useEffect, useState } from "react";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isContentVisible, setIsContentVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsContentVisible(true);
    }, 2100); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`flex min-h-screen flex-col transition-opacity duration-500 ${isContentVisible ? 'opacity-100' : 'opacity-0'}`}>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
