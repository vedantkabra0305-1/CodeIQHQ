"use client"

import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import dynamic from 'next/dynamic';

const Splash = dynamic(() => import('@/components/shared/splash').then((mod) => ({ default: mod.Splash })), { ssr: false });

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Splash />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </>
  );
}
