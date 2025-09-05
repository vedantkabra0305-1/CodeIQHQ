"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="animate-pulse">
        <Image
          src="https://i.postimg.cc/NfGCt8YT/Screenshot-2025-09-05-at-5-59-36-PM.png"
          alt="CodeIQ"
          width={200}
          height={80}
          className="h-16 w-auto"
        />
      </div>
    </div>
  );
}