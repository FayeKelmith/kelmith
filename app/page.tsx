import Image from "next/image";
import { monofett } from "@/public/utils/fonts";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className={monofett.className}>
        <h1 className="text-8xl text-[#008080]">Faye? </h1>
      </div>
    </main>
  );
}
