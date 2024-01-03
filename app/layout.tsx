import type { Metadata } from "next";
import { poppins, monofett } from "@/public/utils/fonts";
import Link from "next/link";
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
      <body className={poppins.className}>
        <nav className="flex flex-row justify-between px-10 pt-5">
          <Link href="/" className={monofett.className}>
            <h1 className="text-5xl text-[#008080]">Faye? </h1>
          </Link>
          <Link href="/essays" className="text-xl">
            {" "}
            Essays
          </Link>
        </nav>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          {children}
        </main>
      </body>
    </html>
  );
}
