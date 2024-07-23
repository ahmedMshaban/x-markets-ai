import Image from "next/image";

export function EnhanceMarket() {
  return (
    <div className="container md:py-20 py-10 flex flex-col md:flex-row items-center justify-between max-w-1226 md:gap-12 m-auto">
      <div className="md:w-1/2 relative grow">
        <Image
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-auto"
          src="/assets/enhance-market.svg"
          alt="enhance market"
        />
      </div>

      <div className="md:w-1/2 md:max-w-421 md:mr-20">
        <h4 className="font-syne text-customGray-medium text-15px font-bold leading-120 tracking-5.4 uppercase">
          Refined Prompts
        </h4>
        <h2 className="font-space-grotesk text-black md:text-48px text-3xl md:tracking-1.44 font-bold md:leading-120 md:my-6 my-3">
          AI-Enhanced Market Precision
        </h2>
        <p className="font-space-grotesk text-customGray-dark leading-160 text-20px">
          Our advanced AI refines prompts to ensure markets are precise,
          detailed, and highly engaging.
        </p>
      </div>
    </div>
  );
}
