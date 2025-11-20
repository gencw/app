import NavItem from "./nav-item";
import Home from "@/public/navs/home.svg";
import HomeSelected from "@/public/navs/home-selected.svg";
import Seacrh from "@/public/navs/search.svg";
import SeacrhSelected from "@/public/navs/search-selected.svg";
import Messages from "@/public/navs/messages.svg";
import MessagesSelected from "@/public/navs/messages-selected.svg";
import Courses from "@/public/navs/courses.svg";
import CoursesSelected from "@/public/navs/courses-selected.svg";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface NavLink {
  name: string;
  href: string;
  icon: StaticImport;
  iconSelected: StaticImport;
}
const NavLinks: NavLink[] = [
  { name: "主页", href: "/", icon: Home, iconSelected: HomeSelected },
  {
    name: "搜索",
    href: "/explore",
    icon: Seacrh,
    iconSelected: SeacrhSelected,
  },
  {
    name: "消息",
    href: "/messages",
    icon: Messages,
    iconSelected: MessagesSelected,
  },
  {
    name: "课程",
    href: "/courses",
    icon: Courses,
    iconSelected: CoursesSelected,
  },
];
export default function NavBar() {
  return (
    <div className="w-full flex flex-row sm:flex-col gap-1">
      {NavLinks.map((link) => (
        <NavItem
          key={link.href}
          name={link.name}
          href={link.href}
          icon={link.icon}
          iconSelected={link.iconSelected}
        />
      ))}
      <NavItem
        key={"/user/1"}
        name={"username"}
        href={"/user/1"}
        icon={"https://github.com/shadcn.png"}
      />
    </div>
  );
}
