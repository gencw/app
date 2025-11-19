import NavItem from "./nav-item";
interface NavLink {
  name: string;
  href: string;
}
const NavLinks: NavLink[] = [
  { name: "主页", href: "/" },
  { name: "探索", href: "/explore" },
  { name: "消息", href: "/messages" },
  { name: "课程", href: "/courses" },
];
export default function NavBar() {
  return (
    <div className="w-full h-full flex flex-col ">
      {NavLinks.map((link) => (
        <NavItem key={link.href} name={link.name} href={link.href} />
      ))}
    </div>
  );
}
