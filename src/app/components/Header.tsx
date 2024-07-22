import Image from "next/image";
import { Button } from "@/app/components";

export function Header() {
  return (
    <header className="container max-w-7xl flex md:gap-x-19 py-6">
      <div className="w-[219px] h-[40px] relative">
        <Image src="/assets/logo.svg" fill alt="Xmarkets.AI logo" />
      </div>
      <nav className="flex gap-x-19 ml-auto items-center shrink-0">
        {/* <a
          className="text-[19.385px] leading-[33.231px] text-[#2D2D2D] font-semibold"
          href="/product"
        >
          Product
        </a>
        <a
          className="text-[19.385px] leading-[33.231px] text-[#2D2D2D] font-semibold"
          href="/docs"
        >
          Docs
        </a>
        <a
          className="text-[19.385px] leading-[33.231px] text-[#2D2D2D] font-semibold"
          href="/career"
        >
          Career
        </a> 
        <a
          className="text-[19.385px] leading-[33.231px] text-[#2D2D2D] font-semibold"
          href="/login"
        >
          Login
        </a>*/}
        <Button />
      </nav>
    </header>
  );
}
