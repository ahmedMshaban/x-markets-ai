import Image from "next/image";

export function PoweredBy() {
  return (
    <section className="container max-w-1070 m-auto  py-10">
      <h2 className="text-center text-[#413F47] text-[15px] font-bold leading-6 tracking-[1.5px] uppercase pb-2">
        Powered By
      </h2>
      <div className="flex flex-wrap justify-center md:gap-[58px] gap-4">
        <Image
          src="/assets/grok.svg"
          width={0}
          height={0}
          alt="Grok Logo"
          className="h-auto w-[125px] "
        />
        <Image
          src="/assets/uma.svg"
          width={0}
          height={0}
          alt="Uma Logo"
          className="h-auto w-[45px] "
        />
      </div>
    </section>
  );
}

export default PoweredBy;
