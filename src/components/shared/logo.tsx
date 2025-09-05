import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2", className)}>
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary-foreground" fill="currentColor">
            <path d="M8.5 8.5L12 12l3.5-3.5L16 9l-4 4-4-4z"/>
            <path d="M8 3v2H6v2H4v2H2v2h2v2h2v2h2v2h8v-2h2v-2h2v-2h2v-2h-2V9h-2V7h-2V5h-2V3H8z"/>
          </svg>
        </div>
        <span className="font-headline text-xl font-bold text-primary">CodeIQ</span>
      </div>
    </Link>
  );
}
