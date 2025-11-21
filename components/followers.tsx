import Link from "next/link";
import { Button } from "./ui/button";
import { generateMockFollows } from "@/mocks/follows";
import FollowerItem from "./follower-item";

export default async function Followers() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await data.json();
  const follows = generateMockFollows(5);
  return (
    <div className="w-full bg-zinc-100 px-4 py-2 rounded-md flex-col gap-2 lg:flex hidden">
      <p className="font-bold text-sm">我的关注</p>
      {follows.map((user) => (
        <FollowerItem key={user.id} user={user} />
      ))}
      <Button asChild size={"sm"}>
        <Link href="/">显示更多</Link>
      </Button>
    </div>
  );
}
