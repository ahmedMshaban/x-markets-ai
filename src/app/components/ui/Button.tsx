import Image from "next/image";

interface ButtonProps {
  backgroundColor?: string;
  text?: string;
  link?: string;
}

export function Button({
  backgroundColor = "bg-[black]",
  text = "Follow Us on",
  link = "https://x.com/xmarketsai",
}: ButtonProps) {
  return (
    <a
      href={link}
      target="_blank"
      className={`inline-flex align-center gap-2 md:text-[19.385px] text-[16px] md:leading-[33.231px] font-semibold ${backgroundColor} hover:opacity-80 text-[white] rounded-2xl px-4 py-2`}
    >
      {text}
      <Image src="/assets/x-logo.svg" width="20" height="18" alt="X logo" />
    </a>
  );
}

export default Button;
