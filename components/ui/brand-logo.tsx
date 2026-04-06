import Image from "next/image";

type BrandLogoProps = {
  textClassName?: string;
  iconClassName?: string;
};

export function BrandLogo({
  textClassName = "",
  iconClassName = "h-8 w-8",
}: BrandLogoProps) {
  return (
    <>
      <Image
        src="/chat.svg"
        alt=""
        width={32}
        height={32}
        className={`shrink-0 ${iconClassName}`}
        unoptimized
      />
      <span className={textClassName}>Youver</span>
    </>
  );
}
