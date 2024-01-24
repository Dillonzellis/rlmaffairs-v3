import { NavDesktop } from "@/components/NavDesktop";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Image
        src="/hero-placeholder.jpg"
        alt=""
        width={1280}
        height={834}
        className="h-screen"
      />
      <div className="absolute top-7 left-7 flex gap-4">
        <Image src="/hamburger.svg" alt="" width={45} height={20} />
        <div className="text-white text-lg">MENU</div>
      </div>
      <h1 className="font-serif absolute left-1/2 top-[10%] text-8xl text-white -translate-x-1/2">
        RLM
      </h1>
      <NavDesktop />
    </main>
  );
}
