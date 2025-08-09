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
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    let i = 0;
    const intervalId = setInterval(() => {
      setDisplayedText(text.slice(0, i + 1));
      i++;
      if (i >= text.length) {
        clearInterval(intervalId);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [isClient, text, speed]);

  if (!isClient) {
    return <span className={className}>{text}<span className={cn("animate-pulse opacity-0", cursorClassName)}>|</span></span>;
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
