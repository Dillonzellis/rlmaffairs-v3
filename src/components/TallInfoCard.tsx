import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { ContentCard } from "./ContentCard";
import type { ContentCardProps } from "@/components/ContentCard";

interface TallInfoCardProps extends ContentCardProps {
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
    <MaxWidthWrapper cols="twoCols">
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
      <ContentCard
        title={title}
        subtext={subtext}
        buttonText={buttonText}
        buttonLink={buttonLink}
      />
    </MaxWidthWrapper>
  );
};
