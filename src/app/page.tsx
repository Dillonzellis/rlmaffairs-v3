import { ContentCard } from "@/components/ContentCard";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
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
      <section className="min-h-screen py-8 flex flex-col items-center justify-center">
        <TallInfoCard
          image="/venue-feat.jpg"
          imageAlt=""
          title="Venue & Event Space"
          subtext="Venue & Event Space"
          buttonText="Schedule a Tour"
          buttonLink=""
        />
      </section>
      <section className="py-24">
        <MaxWidthWrapper cols="twoCols">
          <ContentCard
            title="Floral Designs"
            subtext="Venue & Event Space"
            buttonText="Schedule a Tour"
            buttonLink=""
          />
          <div className="relative">
            <Image
              src="/floral-feat.jpg"
              alt=""
              width={545}
              height={415}
              className="hover:scale-[1.03] transition-all ease-in-out duration-700"
            />
            <div
              aria-hidden="true"
              className="w-[383px] h-[475px] bg-[#90764c]/20 absolute -top-4 -left-10 -z-20"
            ></div>
            <div
              aria-hidden="true"
              className="w-[353px] h-[375px] bg-[#1B5B32]/60 absolute -bottom-7 -right-4 -z-10"
            ></div>
          </div>
        </MaxWidthWrapper>
      </section>
    </main>
  );
}
