import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import UserHoverCard from "./user-hover-card";
interface FollowItemProps {
  user: {
    id: number;
    name: string;
    avatar: string;
  };
}
export default function FollowerItem({ user }: FollowItemProps) {
  return (
    <div className="pl-2 flex flex-row items-center justify-between">
      <div className="flex flex-row items-center gap-2 ">
        <UserHoverCard>
          <Avatar className="w-8 h-8 cursor-pointer">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback>{"na"}</AvatarFallback>
          </Avatar>
        </UserHoverCard>
        <UserHoverCard>
          <div className="overflow-hidden text-ellipsis whitespace-nowrap max-w-[120px] hover:underline cursor-pointer">
            {user.name}
          </div>
        </UserHoverCard>
      </div>

      <Button size={"sm"} className="cursor-pointer">
        取关
      </Button>
    </div>
  );
}
