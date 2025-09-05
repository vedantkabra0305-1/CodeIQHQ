"use client";

import { useState } from "react";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { SplashScreen } from "@/components/shared/splash-screen";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="flex min-h-screen flex-col">
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}