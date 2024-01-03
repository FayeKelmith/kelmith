import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="">
      <div className="w-full md:min-h-[75vh] flex md:flex-row flex-col-reverse justify-around items-center">
        <div className="text-3xl space-y-2">
          <h2 className="">
            I am <span className="font-bold">Kelmith</span>
          </h2>
          <h2 className="">
            I <span className="font-bold">write Code and Essays.</span>
          </h2>
          <h2 className="">
            Also, experiment with <span className="font-bold">automation</span>{" "}
          </h2>
          <h2>
            <Link href="/work" className="text-[#008080] underline text-2xl">
              Please check out my work
            </Link>
          </h2>
        </div>
        <Image
          src="/images/kelmith.png"
          alt="Picture of the Kelmith"
          width={640}
          height={768}
          className="py-10 w-full md:w-fit"
        />
      </div>
    </div>
  );
}
