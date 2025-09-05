"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500); // Wait for fade out animation
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-500",
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      <div className="animate-pulse">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-10 h-10 text-primary-foreground" fill="currentColor">
              <path d="M8.5 8.5L12 12l3.5-3.5L16 9l-4 4-4-4z"/>
              <path d="M8 3v2H6v2H4v2H2v2h2v2h2v2h2v2h8v-2h2v-2h2v-2h2v-2h-2V9h-2V7h-2V5h-2V3H8z"/>
            </svg>
          </div>
          <span className="font-headline text-4xl font-bold text-primary">CodeIQ</span>
        </div>
      </div>
    </div>
  );
}