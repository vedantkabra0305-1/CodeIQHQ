import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2", className)}>
      <Image
        src="https://i.postimg.cc/NfGCt8YT/Screenshot-2025-09-05-at-5-59-36-PM.png"
        alt="CodeIQ"
        width={120}
        height={40}
        className="h-8 w-auto"
      />
    </Link>
  );
}
