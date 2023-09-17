"use client";

import { ThemeProvider } from "next-themes";

type Props = {
  children: React.ReactNode;
};
export default function DarkmodeProvider({ children }: Props) {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
