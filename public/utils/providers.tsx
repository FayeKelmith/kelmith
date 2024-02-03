"use client";
import { ThemeProvider } from "next-themes";

export const Provider = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode => {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};
