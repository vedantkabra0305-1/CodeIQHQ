"use client";

import { useState, useEffect } from 'react';
import { Logo } from './logo';
import { cn } from '@/lib/utils';

export function Splash() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  if (!isMounted) {
    return null;
  }
  
  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] flex items-center justify-center bg-white transition-opacity duration-1000",
        isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      <div className={cn("transition-transform duration-500", isLoading ? "scale-100" : "scale-125")}>
         <Logo className="[&>svg]:w-16 [&>svg]:h-16 [&>span]:text-5xl [&>span]:text-primary" />
      </div>
    </div>
  );
}
