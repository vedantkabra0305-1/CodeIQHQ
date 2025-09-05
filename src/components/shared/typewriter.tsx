"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

type TypewriterProps = {
  text: string;
  speed?: number;
  className?: string;
  cursorClassName?: string;
};

export function Typewriter({
  text,
  speed = 100,
  className,
  cursorClassName,
}: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    let i = 0;
    const intervalId = setInterval(() => {
      setDisplayedText(text.slice(0, i + 1));
      i++;
      if (i >= text.length) {
        clearInterval(intervalId);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [isMounted, text, speed]);

  // Show full text on server and before hydration
  if (!isMounted) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={className}>
      {displayedText}
      <span
        className={cn(
          "animate-pulse",
          displayedText.length === text.length ? "hidden" : "",
          cursorClassName
        )}
      >
        |
      </span>
    </span>
  );
}