"use client";
import Link from "next/link";
import LoadingIndicator from "./loading-indicator";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
interface NavItemProps {
  name: string;
  href: string;
  icon: string | StaticImport;
  iconSelected?: string | StaticImport;
}
export default function NavItem({
  name,
  href,
  icon,
  iconSelected,
}: NavItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "h-10 w-full flex items-center lg:justify-between justify-center  lg:px-4 sm:rounded-md hover:bg-zinc-100 lg:text-sm  lg:tracking-widest",
        isActive && "font-bold lg:bg-zinc-100"
      )}
    >
      <div className="flex flex-row items-center lg:gap-2">
        {typeof icon === "string" ? (
          <Avatar className="w-8 h-8 cursor-pointer">
            <AvatarImage src={icon} alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        ) : (
          <Image
            width={24}
            height={24}
            alt="icon"
            src={isActive ? iconSelected! : icon}
          />
        )}

        <div className="lg:block hidden">{name}</div>
      </div>
      <LoadingIndicator />
    </Link>
  );
}
