"use client";

import Link from "next/link";
import SearchIcon from "./ui/reactIcons/SearchIcon";
import HomeIcon from "./ui/reactIcons/HomeIcon";
import DarkmodeButton from "./ui/DarkmodeButton";
import Button from "./ui/Button";
import { usePathname } from "next/navigation";
import PostingIcon from "./ui/reactIcons/PostingIcon";
import { useSession, signIn, signOut } from "next-auth/react";

const navbarMenu = [
  {
    href: "/search",
    icon: <SearchIcon />,
  },
  {
    href: "/",
    icon: <HomeIcon />,
  },
  {
    href: "/posting",
    icon: <PostingIcon />,
  },
];
export default function Header() {
  const { data: session } = useSession(); //session이 있으면 login 된거 없으면 안된거
  const pathName = usePathname();
  return (
    <section className="flex justify-between items-center pl-6">
      <Link href="/">
        <h1 className="font-bold text-2xl">SNS</h1>
      </Link>
      <nav>
        <ul className="flex gap-3 items-center">
          {navbarMenu.map((item) => (
            <li
              key={item.href}
              className={
                pathName === item.href
                  ? "border-2 rounded-md border-white p-1"
                  : "border-2 rounded-md border-transparent p-1"
              }
            >
              <Link href={item.href}>{item.icon}</Link>
            </li>
          ))}
          <li key="darkmode" className="p-1">
            <DarkmodeButton />
          </li>
          <li key="login">
            {session ? (
              <Button
                text="Logout"
                onClick={() => {
                  signOut();
                }}
                bgColor="bg-red-400 dark:bg-slate-500"
              />
            ) : (
              <Button
                text="Login"
                onClick={() => {
                  signIn();
                }}
                bgColor="bg-red-400 dark:bg-slate-500"
              />
            )}
          </li>
        </ul>
      </nav>
    </section>
  );
}
