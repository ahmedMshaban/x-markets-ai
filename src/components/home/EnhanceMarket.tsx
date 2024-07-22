import Image from "next/image";

export default function EnhanceMarket() {
  return (
    <div className="py-20 flex flex-col md:flex-row items-center justify-between max-w-1226 gap-12">
      <div className="w-1/2 relative grow">
        <Image
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-auto"
          src="/enhance-crash.svg"
          alt="enhance market"
        />
      </div>

      <div className="w-1/2 max-w-421 mr-20">
        <h4 className="font-syne text-customGray-medium text-15px font-bold leading-120 tracking-5.4 uppercase">
          Enhancing Precision
        </h4>
        <h2 className="font-space-grotesk text-black text-48px tracking-1.44 font-bold leading-120 my-6">
          AI-Enhanced Market Precision
        </h2>
        <p className="font-syne text-customGray-dark font-medium leading-160 text-20px">
          Our advanced AI refines prompts to ensure markets are precise,
          detailed, and highly engaging.
        </p>
      </div>
    </div>
  );
}
