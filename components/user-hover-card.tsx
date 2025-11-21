import React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Check from "@/public/check.svg";
import { User } from "@/mocks/follows";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
interface UserHoverCardProps {
  children: React.ReactNode;
  user: User;
}
export default function UserHoverCard({ children, user }: UserHoverCardProps) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>{children}</HoverCardTrigger>
      <HoverCardContent className="w-56 flex flex-col gap-2 p-3 rounded-xl">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row gap-2 items-center">
            <Avatar className="w-8 h-8 cursor-pointer">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback>{"na"}</AvatarFallback>
            </Avatar>
            <div className=" font-bold max-w-24 truncate">{user.name}</div>
          </div>

          {user.checked && (
            <Image src={Check} width={20} height={20} alt="check" />
          )}
        </div>
        <p className="text-sm font-semibold line-clamp-3">{user.bio}</p>
        <div className="flex flex-row items-center justify-between">
          <Button asChild variant={"link"} className="p-0">
            <Link href="/">
              <div className="text-sm">
                <span className="font-semibold">{user.fansCount}</span>
                <span className="font-normal"> 位粉丝</span>
              </div>
            </Link>
          </Button>
          <Button asChild variant={"link"} className="p-0">
            <Link href="/">
              <div className="text-sm">
                <span className="font-semibold">{user.fansCount}</span>
                <span className="font-normal"> 位关注</span>
              </div>
            </Link>
          </Button>
        </div>
        <Button variant="outline" className="cursor-pointer">
          取关
        </Button>
      </HoverCardContent>
    </HoverCard>
  );
}
