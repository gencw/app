"use client";
import Link from "next/link";
import LoadingIndicator from "./loading-indicator";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
interface NavItemProps {
  name: string;
  href: string;
}
export default function NavItem({ name, href }: NavItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "w-full h-10 flex items-center justify-between rounded-md px-4 hover:bg-zinc-100 text-sm  tracking-widest",
        isActive && "font-bold bg-zinc-100"
      )}
    >
      {name}
      <LoadingIndicator />
    </Link>
  );
}
