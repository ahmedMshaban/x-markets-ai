import Image from "next/image";

export function CreateMarket() {
  return (
    <div className="container md:py-20 py-10 flex flex-col md:flex-row items-center justify-between max-w-1226 m-auto">
      <div className="order-last md:order-first md:w-1/2 md:max-w-421 md:mr-20">
        <h4 className="font-syne text-customGray-medium text-15px font-bold leading-120 tracking-5.4 uppercase">
          Enhancing Precision
        </h4>
        <h2 className="font-space-grotesk text-black md:text-48px text-3xl md:tracking-1.44 font-bold md:leading-120 md:my-6 my-3">
          Leveraging X for Market Creation
        </h2>
        <p className="font-space-grotesk text-customGray-dark leading-160 text-20px">
          Empower top X influencers with over 1k followers to create engaging
          markets, driving higher trust and participation.
        </p>
      </div>

      <div className="order-first md:order-last md:w-1/2 relative grow">
        <Image
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-auto"
          src="/assets/create-market.svg"
          alt="create a market"
        />
      </div>
    </div>
  );
}
