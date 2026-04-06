import Image from "next/image";

/** Decorative `remake.svg` scaled behind the hero phone (design asset). */
export function HeroRemakeBackdrop() {
  return (
    <div
      className="pointer-events-none absolute -bottom-4 left-1/2 -z-10 w-[min(90vw,28rem)] -translate-x-1/2 select-none md:w-[32rem]"
      aria-hidden
    >
      <Image
        src="/remake.svg"
        alt=""
        width={512}
        height={512}
        className="h-auto w-full opacity-40 blur-[0.5px]"
        unoptimized
      />
    </div>
  );
}
