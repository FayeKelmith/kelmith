import type { Metadata } from "next";
import { poppins, monofett } from "@/public/utils/fonts";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kelmith ",
  description: "Personal website of Faye? Kelmith",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <nav className="flex flex-row justify-between md:px-10 px-4 py-10">
          <Link href="/" className={monofett.className}>
            <h1 className="text-4xl md:text-5xl text-[#008080]">Faye? </h1>
          </Link>
          <Link href="/essays" className="text-xl">
            Essays
          </Link>
        </nav>
        <main className="">{children}</main>
      </body>
    </html>
  );
}
