import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

import UserHoverCard from "./user-hover-card";
export default function FollowItem() {
  return (
    <div className="pl-2 flex flex-row items-center justify-between">
      <div className="flex flex-row items-center gap-2 ">
        <UserHoverCard>
          <Avatar className="w-8 h-8 cursor-pointer">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </UserHoverCard>
        <UserHoverCard>
          <div className="overflow-hidden text-ellipsis whitespace-nowrap max-w-[120px] hover:underline cursor-pointer">
            username
          </div>
        </UserHoverCard>
      </div>

      <Button size={"sm"} className="cursor-pointer">
        取关
      </Button>
    </div>
  );
}
