import Link from "next/link";
import FollowItem from "./follow-item";
import { Button } from "./ui/button";

export default function Follows() {
  return (
    <div className="w-full bg-zinc-100 px-4 py-2 rounded-md  flex-col gap-2 lg:flex hidden">
      <p className="font-bold text-sm">我的关注</p>
      <FollowItem />
      <FollowItem />
      <FollowItem />
      <Button asChild size={"sm"}>
        <Link href="/">显示更多</Link>
      </Button>
    </div>
  );
}
