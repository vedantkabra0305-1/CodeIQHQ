import Link from "next/link";
import { Code } from "lucide-react";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2", className)}>
      <Code className="h-6 w-6 text-accent" />
      <span className="text-xl font-bold font-headline text-primary">
        CodeIQ
      </span>
    </Link>
  );
}
