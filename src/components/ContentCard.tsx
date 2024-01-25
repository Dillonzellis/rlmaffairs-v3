import Image from "next/image";

export interface ContentCardProps {
  title: string;
  subtext: string;
  buttonText: string;
  buttonLink: string;
}

export const ContentCard = ({
  title,
  subtext,
  buttonText,
  buttonLink,
}: ContentCardProps) => {
  return (
    <div className="flex flex-col justify-center gap-1.5">
      <div className="text-primary/40 text-sm">{subtext}</div>
      <div className="text-5xl pb-2">{title}</div>
      <a href={buttonLink} className="text-3xl flex gap-6">
        <Image src="/right-arrow.svg" alt="" width={55} height={20} />
        {buttonText}
      </a>
    </div>
  );
};
