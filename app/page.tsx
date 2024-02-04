"use client";
import Image from "next/image";
import Link from "next/link";
import FeaturedContentCard from "@/public/components/FeaturedContentCard";
export default function Home() {
  return (
    <main className="">
      <header className="w-full flex md:flex-row flex-col-reverse justify-around items-center mb-8">
        <div className="text-3xl space-y-2">
          <h2 className="text-5xl">
            I am <span className="font-bold"> Faye Kelmith</span>
          </h2>
          <h2 className="">
            I{" "}
            <span className="font-semibold">
              write{" "}
              <Link href="/work" className="underline text-rouge">
                Code
              </Link>{" "}
              and
              <Link href="/essays" className="underline text-bleu">
                {" "}
                Essays
              </Link>
              .
            </span>
          </h2>
          <h2 className="">
            Also, experiment with{" "}
            <span className="font-semibold">automation</span>{" "}
          </h2>
        </div>
        <Image
          src="/images/kelmith.png"
          alt="Picture of the Kelmith"
          width={500}
          height={500}
          className=" w-full md:w-fit h-auto dark:opacity-80"
        />
      </header>
      <section className="mx-auto container">
        <div className="text-3xl flex items-center ml-10 my-4">
          {" "}
          <div className="bg-rouge w-2 h-10 mx-2"> </div> My most recent essays
        </div>
        <div className="grid md:grid-cols-3 gap-x-8 mx-auto my-2">
          <FeaturedContentCard />
          <FeaturedContentCard />
          <FeaturedContentCard />
        </div>
      </section>
    </main>
  );
}

//TODO: Add my current favorite song
