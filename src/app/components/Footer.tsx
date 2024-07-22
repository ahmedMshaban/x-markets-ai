import Image from "next/image";

export function Footer() {
  return (
    <footer className="pb-[37px] bg-[#151518]">
      <div className="w-[1070px] m-auto border-t border-[white] border-dashed pt-[37px] border-opacity-20">
        <p className="flex items-center gap-[30px] text-[#ECECEC] text-[15px]">
          <Image
            src="/assets/footer-logo.svg"
            width="39"
            height="39"
            alt="xMarkets Logo"
          />
          <span
            className="opacity-60
            font-semibold
            tracking[-0.45px]
          "
          >
            © 2024 xMarkets. All Rights Reserved.
          </span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
