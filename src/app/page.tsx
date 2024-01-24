import { NavDesktop } from "@/components/NavDesktop";
import { TallInfoCard } from "@/components/TallInfoCard";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <section className="min-h-screen relative">
        <Image
          src="/hero-placeholder.jpg"
          alt=""
          width={1280}
          height={834}
          className="h-screen object-cover"
        />
        <div className="top-7 left-7 flex gap-4 fixed">
          <Image src="/hamburger.svg" alt="" width={45} height={20} />
          <div className="text-white text-lg">MENU</div>
        </div>
        <h1 className="font-serif absolute left-1/2 top-[10%] text-8xl text-white -translate-x-1/2">
          RLM
        </h1>
        <NavDesktop />
        <Image
          src="/down-arr.svg"
          alt=""
          width={20}
          height={55}
          className="absolute bottom-8 right-7"
        />
      </section>
      <section className="min-h-screen">
        <TallInfoCard />
      </section>
    </main>
  );
}
