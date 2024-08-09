import Image from "next/image";

export function Footer() {
  return (
    <footer className="pb-[37px] bg-[#151518]">
      <div className="flex flex-col items-center container text-center max-w-1226 m-auto border-t border-[white] border-dashed pt-[37px] border-opacity-20">
        <Image
          src="/assets/footer-logo.svg"
          width={0}
          height={0}
          alt="xMarkets Logo"
          className="h-auto w-[25.44px]"
        />
        <p
          className="opacity-60
            font-semibold
            tracking[-0.45px] mt-5 text-[#ECECEC] text-[15px]"
        >
          © 2024 xMarkets. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
