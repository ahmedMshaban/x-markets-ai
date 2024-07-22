import Image from "next/image";

export function ResolutionMethod() {
  return (
    <div className="py-20 flex flex-col md:flex-row items-center justify-between max-w-1226 gap-12 m-auto">
      <div className="w-1/2 max-w-518">
        <h4 className="font-syne text-customGray-medium text-15px font-bold leading-120 tracking-5.4 uppercase">
          Enhancing Precision
        </h4>
        <h2 className="font-space-grotesk text-black text-48px tracking-1.44 font-bold leading-120 my-6">
          Flexible and Trustworthy Judging
        </h2>
        <p className="font-syne text-customGray-dark font-medium leading-160 text-20px max-w-400">
          Choose from creator-led judging, AI with browsing capabilities, or UMA
          for unbiased market resolutions.
        </p>
      </div>

      <div className="w-1/2 grow">
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
