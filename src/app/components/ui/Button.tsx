import Image from "next/image";

interface ButtonProps {
  backgroundColor?: string;
  text?: string;
  link?: string;
}

export function Button({
  backgroundColor = "bg-[black]",
  text = "Follow Us on",
  link = "https://x.com/xmarketshq",
}: ButtonProps) {
  return (
    <a
      href={link}
      target="_blank"
      className={`inline-flex align-center gap-2 md:text-[19.385px] text-[16px] md:leading-[33.231px] font-semibold ${backgroundColor} hover:opacity-80 text-[white] rounded-2xl px-4 py-2`}
    >
      {text}

      <Image
        src="/assets/x-logo.svg"
        width={0}
        height={0}
        alt="X logo"
        className="h-auto w-[20px] "
      />
    </a>
  );
}

export default Button;
