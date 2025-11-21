import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="lg:px-4 hidden sm:flex w-full items-center justify-center lg:justify-start"
    >
      <Image
        src={"/logo.svg"}
        alt="logo"
        width={32}
        height={32}
        className="lg:hidden"
      />
      <div className="lg:block hidden ml-2 font-bold text-lg">群峰之巅</div>
    </Link>
  );
}
