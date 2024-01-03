import Image from "next/image";
export default function Home() {
  return (
    <div className="container border border-pink-500 min-h-[75vh]">
      <div className="flex flex-row justify-between">
        <div>
          <h1>Hello!</h1>
          <h2>I am Kelmith</h2>
          <h3>I write Code and Essays.</h3>
        </div>
        <div>
          <Image
            src="/images/kelmith.png"
            alt="Picture of the Kelmith"
            width={500}
            height={500}
            className="border border-pink-500"
          />
        </div>
      </div>
    </div>
  );
}
