"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Don't render anything on server
  if (!isMounted) {
    return null;
  }

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
          priority
        />
      </div>
    </div>
  );
}