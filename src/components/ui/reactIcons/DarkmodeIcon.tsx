"use client";

import { BsFillMoonFill, BsSun } from "react-icons/bs";
type Props = {
  theme: string | undefined;
};
export default function DarkmodeIcon({ theme = "light" }: Props) {
  return (
    <div>
      {theme === "light" ? (
        <BsFillMoonFill className="w-8 h-8" />
      ) : (
        <BsSun className="w-8 h-8" />
      )}
    </div>
  );
}
