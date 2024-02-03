import type { Metadata } from "next";
import { poppins } from "@/public/utils/fonts";
import Link from "next/link";
import "./globals.css";
import Image from "next/image";
import { Provider } from "@/public/utils/providers";

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
        <Provider>
          <nav className="flex flex-row justify-between md:px-10 px-4 py-2 items-center">
            <Link href="/">
              {/* <h1 className="text-4xl md:text-5xl text-[#008080]">Faye? </h1> */}
              <Image
                src="/images/logo/logo_transparent.png"
                alt="Faye Logo"
                width={200}
                height={200}
                className=" w-full md:w-fit h-auto"
              />
            </Link>
            <div className="">
              <Link href="/work" className="text-2xl mx-8">
                My Work
              </Link>
              <Link href="/essays" className="text-2xl mx-8">
                Essays
              </Link>
            </div>
          </nav>
          <main className="">{children}</main>
        </Provider>
      </body>
    </html>
  );
}
