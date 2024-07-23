import Image from "next/image";

export function ResolutionMethod() {
  return (
    <div className="container md:py-20 py-10 flex flex-col md:flex-row items-center justify-between max-w-1226 md:gap-12 m-auto">
      <div className="order-last md:order-first md:w-1/2 md:max-w-518">
        <h4 className="font-syne text-customGray-medium text-15px font-bold leading-120 tracking-5.4 uppercase">
          unbiased resolutions
        </h4>
        <h2 className="font-space-grotesk text-black md:text-48px text-3xl md:tracking-1.44 font-bold md:leading-120 md:my-6 my-3">
          Flexible and Trustworthy Judging
        </h2>
        <p className="font-space-grotesk text-customGray-dark leading-160 text-20px md:max-w-400">
          Choose from creator-led judging, AI with browsing capabilities, or UMA
          for unbiased market resolutions.
        </p>
      </div>

      <div className="order-first md:order-last md:w-1/2 grow">
        <Image
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-auto"
          src="/assets/resolution-method.svg"
          alt="create-a-market"
        />
      </div>
    </div>
  );
}
