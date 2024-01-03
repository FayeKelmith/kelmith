import type { Metadata } from "next";
import { poppins } from "@/public/utils/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Faye? Kelmith ",
  description: "Personal website of Faye? Kelmith",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
