import Image from "next/image";

export function CreateMarket() {
  return (
    <div className="py-20 flex flex-col md:flex-row items-center justify-between max-w-1226 m-auto">
      <div className="w-1/2 max-w-421 mr-20">
        <h4 className="font-syne text-customGray-medium text-15px font-bold leading-120 tracking-5.4 uppercase">
          Enhancing Precision
        </h4>
        <h2 className="font-space-grotesk text-black text-48px tracking-1.44 font-bold leading-120 my-6">
          Leveraging X for Market Creation
        </h2>
        <p className="font-syne text-customGray-dark font-medium leading-160 text-20px">
          Empower top X influencers with over 1k followers to create engaging
          markets, driving higher trust and participation.
        </p>
      </div>

      <div className="w-1/2 relative grow">
        <Image
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-auto"
          src="/assets/create-a-market.svg"
          alt="create a market"
        />
      </div>
    </div>
  );
}
