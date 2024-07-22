import Image from "next/image";
import Button from "./ui/Button";

export function EarnWithMarket() {
  return (
    <>
      <div className="flex justify-between items-center">
        <Image
          src="/assets/black-bg-top.svg"
          width={175.11}
          height={55}
          alt=""
        />

        <Image
          src="/assets/black-bg-top.svg"
          width={175.11}
          height={55}
          alt=""
          className="transform scale-x-[-1]"
        />
      </div>

      <div className="bg-customGray-extraDark py-20">
        <div>
          <h2 className="font-space-grotesk text-white text-48px tracking-1.44 font-bold leading-120 mb-6 text-center">
            Earn with Every Market
          </h2>
          <p className="font-syne text-white font-medium leading-160 tracking-[0.8px] text-20px mb-[55px] text-center">
            Market creators earn 50% of the trading fees, incentivizing
            high-quality market creation.
          </p>
        </div>

        <div className="p-px rounded-3xl max-w-1226 m-auto relative overflow-hidden border-linear-gradient ">
          <div
            className="rounded-3xl pt-[35px] pb-[47px] px-[170px] "
            style={{
              background:
                "linear-gradient(246deg, rgba(53, 53, 54, 0.70) -1.67%, rgba(19, 19, 22, 0.70) 151.49%)",
            }}
          >
            <Image
              src="/assets/circle.svg"
              width={676}
              height={676}
              alt=""
              className="absolute top-0 left-1/2 transform -translate-x-1/2"
            />

            <Image
              src="/assets/arbitrum.svg"
              width={40}
              height={40}
              alt="Arbitrum logo"
              className="m-auto z-50 relative"
            />
            <h3 className="font-space-grotesk text-white text-36px tracking-[1.08] font-bold leading-120 my-[29px] text-center z-50 relative">
              Running on Arbitrum
            </h3>
            <div className="flex gap-[25px] mb-11">
              <div
                className="py-[110px] px-[41px] rounded-[10px] w-1/2 z-50 relative"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.00) 65%), rgba(116, 118, 134, 0.05)",
                  boxShadow:
                    "0px 1px 1px 0px rgba(255, 255, 255, 0.05) inset, 0px 2px 13px 0px rgba(0, 0, 0, 0.20), 0px 1px 2px 0px rgba(0, 0, 0, 0.20)",
                  backdropFilter: "blur(3.5px)",
                }}
              >
                <p className="text-customGray-extraLight font-inter text-base font-bold leading-160 m-0.5">
                  Earning
                </p>
                <p className="text-customGray-extraLight text-[51.32px] font-inter leading-160 font-bold text-center">
                  324.057{" "}
                  <span className="text-[19.32px] font-normal">ETH</span>
                </p>
              </div>

              <div
                className="py-8 px-7 rounded-[10px] w-1/2 z-50 z-50 relative"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.00) 65%), rgba(116, 118, 134, 0.05)",
                  boxShadow:
                    "0px 1px 1px 0px rgba(255, 255, 255, 0.05) inset, 0px 2px 13px 0px rgba(0, 0, 0, 0.20), 0px 1px 2px 0px rgba(0, 0, 0, 0.20)",
                  backdropFilter: "blur(8.5px)",
                }}
              >
                <p className="text-customGray-extraLight font-inter text-base font-bold leading-160 mb-[27px]">
                  Activity
                </p>

                <div className="flex justify-between gap-[21px] items-start">
                  <Image
                    src="/assets/miles-esther.png"
                    width={48}
                    height={48}
                    alt="miles esther"
                    className="border-[3.2px] border-[rgba(19,19,22,0.60)] shadow-[0px_0.534px_0px_0px_rgba(255,255,255,0.03)] rounded-full"
                  />
                  <div>
                    <div className="flex gap-[5px] items-center">
                      <p className="text-customGray-extraLight font-inter text-base font-bold leading-160">
                        Miles Esther
                      </p>
                      <Image
                        src="/assets/verified.svg"
                        width={19.3}
                        height={19.3}
                        alt="verified"
                      />
                      <p className="text-customGray-extraLight font-inter text-base font-medium leading-160">
                        bet
                      </p>
                      <p className="text-[#A0F] font-inter text-medium font-bold leading-160">
                        NO
                      </p>
                    </div>

                    <p className="text-customGray-extraLight font-inter text-xs font-normal leading-160">
                      now
                    </p>
                  </div>

                  <div className="bg-[#0E5D45] rounded py-1 px-[7px]">
                    <span className="text-customGray-extraLight font-inter text-[13px] font-semibold leading-160 mb-[27px] h-auto">
                      +0.023 ETH
                    </span>
                  </div>
                </div>

                <div
                  className="my-[15px] h-px"
                  style={{ background: "rgba(255, 255, 255, 0.10)" }}
                ></div>

                <div className="flex justify-between gap-[21px] items-start">
                  <Image
                    src="/assets/marry-arther.png"
                    width={48}
                    height={48}
                    alt="marry arthur"
                    className="border-[3.2px] border-[rgba(19,19,22,0.60)] shadow-[0px_0.534px_0px_0px_rgba(255,255,255,0.03)] rounded-full"
                  />
                  <div>
                    <div className="flex gap-[3px] items-center">
                      <p className="text-customGray-extraLight font-inter text-base font-bold leading-160">
                        Marry Arthur
                      </p>
                      <Image
                        src="/assets/verified.svg"
                        width={19.3}
                        height={19.3}
                        alt="verified"
                      />
                      <p className="text-customGray-extraLight font-inter text-base font-medium leading-160">
                        bet
                      </p>
                      <p className="text-[#355DFF] font-inter text-medium font-bold leading-160">
                        YES
                      </p>
                    </div>

                    <p className="text-customGray-extraLight font-inter text-xs font-normal leading-160">
                      10s ago
                    </p>
                  </div>

                  <div className="bg-[#0E5D45] rounded py-1 px-[7px]">
                    <span className="text-customGray-extraLight font-inter text-[13px] font-semibold leading-160 mb-[27px] h-auto">
                      +0.343 ETH
                    </span>
                  </div>
                </div>

                <div
                  className="my-[15px] h-px"
                  style={{ background: "rgba(255, 255, 255, 0.10)" }}
                ></div>

                <div className="flex justify-between gap-[21px] items-start">
                  <Image
                    src="/assets/Flores-Juanita.png"
                    width={48}
                    height={48}
                    alt="Flores Juanita"
                    className="border-[3.2px] border-[rgba(19,19,22,0.60)] shadow-[0px_0.534px_0px_0px_rgba(255,255,255,0.03)] rounded-full"
                  />
                  <div>
                    <div className="flex gap-[5px] items-center">
                      <p className="text-customGray-extraLight font-inter text-base font-bold leading-160">
                        Flores Juanita
                      </p>
                      <Image
                        src="/assets/verified.svg"
                        width={19.3}
                        height={19.3}
                        alt="verified"
                      />
                      <p className="text-customGray-extraLight font-inter text-base font-medium leading-160">
                        bet
                      </p>
                      <p className="text-[#A0F] font-inter text-medium font-bold leading-160">
                        NO
                      </p>
                    </div>

                    <p className="text-customGray-extraLight font-inter text-xs font-normal leading-160">
                      1m ago
                    </p>
                  </div>

                  <div className="bg-[#0E5D45] rounded py-1 px-[7px]">
                    <span className="text-customGray-extraLight font-inter text-[13px] font-semibold leading-160 mb-[27px] h-auto">
                      +0.214 ETH
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button backgroundColor="bg-[#4636FF]" />
            </div>

            <Image
              src="/assets/bg-corners.svg"
              width={254}
              height={304}
              alt=""
              className="absolute bottom-0 right-0 transform scale-x-[-1]"
            />
            <Image
              src="/assets/bg-corners.svg"
              width={254}
              height={304}
              alt=""
              className="absolute bottom-0 left-0"
            />
          </div>
        </div>
      </div>
    </>
  );
}
