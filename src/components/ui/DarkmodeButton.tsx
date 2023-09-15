"use client";
import { useTheme } from "next-themes";
import DarkmodeIcon from "./reactIcons/DarkmodeIcon";

export default function DarkmodeButton() {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        <DarkmodeIcon theme={theme} />
      </button>
    </div>
  );
}
