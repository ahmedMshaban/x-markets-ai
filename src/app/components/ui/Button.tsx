import Image from "next/image";

interface ButtonProps {
  backgroundColor?: string;
  text?: string;
}

export function Button({
  backgroundColor = "bg-black",
  text = "Follow Us on",
}: ButtonProps) {
  return (
    <a
      href="#"
      className={`inline-flex align-center gap-2 text-[19.385px] leading-[33.231px] font-semibold ${backgroundColor} text-white rounded-2xl px-4 py-2`}
    >
      {text}
      <Image src="/assets/x-logo.svg" width="20" height="18" alt="X logo" />
    </a>
  );
}

export default Button;
