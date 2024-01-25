import Image from "next/image";
import { Button } from "./ui/button";
import MaxWidthWrapper from "./MaxWidthWrapper";

interface TallInfoCardProps {
  title: string;
  subtext: string;
  buttonText: string;
  buttonLink: string;
  image: string;
  imageAlt: string;
}

export const TallInfoCard = ({
  title,
  subtext,
  buttonText,
  buttonLink,
  image,
  imageAlt,
}: TallInfoCardProps) => {
  return (
    <MaxWidthWrapper className="grid grid-cols-2 gap-16">
      <div className="flex justify-center p-8 bg-[#ECECEC] relative">
        <Image
          src="/paper-bg.jpg"
          height={660}
          width={579}
          alt=""
          className="absolute inset-0 z-0 h-full opacity-50"
        />
        <Image
          src={image}
          alt={imageAlt}
          height={540}
          width={405}
          className="shadow-md shadow-muted-foreground z-10 hover:scale-[1.03] transition-all ease-in-out duration-700"
        />
      </div>
      <div className="flex flex-col justify-center gap-1.5">
        <div className="text-primary/40 text-sm">{subtext}</div>
        <div className="text-5xl pb-2">{title}</div>
        <a href={buttonLink} className="text-3xl flex gap-6">
          <Image src="/right-arrow.svg" alt="" width={55} height={20} />
          {buttonText}
        </a>
      </div>
    </MaxWidthWrapper>
  );
};
