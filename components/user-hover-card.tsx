import React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
interface UserHoverCardProps {
  children: React.ReactNode;
}
export default function UserHoverCard({ children }: UserHoverCardProps) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>{children}</HoverCardTrigger>
      <HoverCardContent className="w-50 flex flex-col gap-2"></HoverCardContent>
    </HoverCard>
  );
}
