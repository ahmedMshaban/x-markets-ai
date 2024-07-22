import Image from "next/image";
import { Button } from "@/app/components/";

export function Hero() {
  return (
    <section className="bg-hero-pattern mt-[-97px]">
      <div className="flex gap-8 w-[1070px] m-auto items-center flex-col pt-[191px]">
        <h1
          className="font-space-grotesk
        text-center
        text-black
        text-7xl
        font-bold
        leading-[79.2px]
        tracking-[2.16px]"
        >
          Building the Future of Truth Seeking via AI
        </h1>
        <p
          className="
            text-[#413F47]
            text-2xl
            font-medium
            text-center
            leading-[38.4px]
        "
        >
          Harnessing AI to Create, Moderate, and Resolve Markets with Precision
        </p>

        <Button />

        <Image
          src="/assets/hero-banner.png"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg="
          width={1070}
          height={600}
          alt="Hero Image"
          className="pt-[25px]"
        />
      </div>
    </section>
  );
}

export default Hero;
