import Image from "next/image";

export function PoweredBy() {
  return (
    <section className="container max-w-1070 m-auto  py-10">
      <h2 className="text-center color-[#413F47] text-[15px] font-bold leading-6 tracking-[1.5px] uppercase pb-2">
        Powered By
      </h2>
      <div className="flex flex-wrap justify-center md:gap-[58px] gap-4">
        <Image src="/assets/grok.svg" width={125} height={49} alt="Grok Logo" />
        <Image
          src="/assets/openai.svg"
          width={129}
          height={49}
          alt="Open Ai Logo"
        />
        <Image
          src="/assets/oracle.svg"
          width={96}
          height={49}
          alt="Oracle Logo"
        />
        <Image src="/assets/uma.svg" width={45} height={45} alt="Uma Logo" />
      </div>
    </section>
  );
}

export default PoweredBy;
