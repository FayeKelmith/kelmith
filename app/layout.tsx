import type { Metadata } from "next";
import { poppins } from "@/public/utils/fonts";
import Link from "next/link";
import "./globals.css";
import Image from "next/image";
import { Provider } from "@/public/utils/providers";
import ThemeButton from "@/public/components/ThemeButton";

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
            <Link href="/" className="">
              <Image
                src="/images/logo/logo_transparent.png"
                alt="Faye Logo"
                width={200}
                height={200}
                className=" w-full md:w-fit h-auto"
              />
            </Link>
            <div className="flex items-center">
              <Link
                href="/work"
                className="text-2xl mx-8 hover:text-bleu px-4 py-2 hover:cursor-pointer "
              >
                My Work
              </Link>
              <Link
                href="/essays"
                className="text-2xl mx-8 hover:text-bleu hover:cursor-pointer px-4 py-2"
              >
                Essays
              </Link>
              <div className="mx-8">
                <ThemeButton />
              </div>
            </div>
          </nav>
          <main className="">{children}</main>
        </Provider>
      </body>
    </html>
  );
}
