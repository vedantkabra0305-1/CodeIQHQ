import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { SplashScreen } from "@/components/shared/splash-screen";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col">
      <SplashScreen />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}