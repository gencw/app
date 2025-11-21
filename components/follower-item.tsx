import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import UserHoverCard from "./user-hover-card";
import Check from "@/public/check.svg";
interface FollowItemProps {
  user: {
    id: number;
    name: string;
    bio: string;
    avatar: string;
    checked: boolean;
    fansCount: number;
    followersCount: number;
  };
}
export default function FollowerItem({ user }: FollowItemProps) {
  return (
    <div className="pl-2 flex flex-row items-center justify-between">
      <div className="flex flex-row items-center gap-2 ">
        <UserHoverCard user={user}>
          <Avatar className="w-8 h-8 cursor-pointer">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback>{"na"}</AvatarFallback>
          </Avatar>
        </UserHoverCard>
        <UserHoverCard user={user}>
          <div className="flex flex-col max-w-[120px]">
            <div className="truncate hover:underline cursor-pointer font-bold text-sm">
              {user.name}
            </div>
            <p className="truncate text-sm text-gray-500">{user.bio}</p>
          </div>
        </UserHoverCard>
      </div>
      {user.checked && <Image src={Check} width={20} height={20} alt="check" />}
    </div>
  );
}
