import Image from "next/image";
import { Button } from "@/app/components/";

export function EarnWithMarket() {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="md:w-1/2 relative">
          <Image
            width="0"
            height="0"
            sizes="100vw"
            className="md:w-[175.11px] w-1/2 h-auto"
            src="/assets/black-bg-top.svg"
            alt=""
          />
        </div>
        <div className="md:w-1/2 relative">
          <Image
            width="0"
            height="0"
            sizes="100vw"
            className="md:w-[175.11px] w-1/2 h-auto transform scale-x-[-1] ml-auto"
            src="/assets/black-bg-top.svg"
            alt=""
          />
        </div>
      </div>

      <div className="bg-customGray-extraDark md:py-20 py-10 px-5">
        <div>
          <h2 className="font-space-grotesk text-white md:text-48px text-36px tracking-1.44 font-bold leading-120 mb-6 text-center">
            Earn with Every Market
          </h2>
          <p className="font-syne text-white font-medium leading-160 tracking-[0.8px] md:text-20px text-15px mb-[55px] text-center">
            Market creators earn 50% of the trading fees, incentivizing
            high-quality market creation.
          </p>
        </div>

        <div className="container p-px rounded-3xl max-w-1226 m-auto relative overflow-hidden border-linear-gradient ">
          <div
            className="rounded-3xl pt-[35px] pb-[47px] lg:px-[170px] sm:px-8 px-4"
            style={{
              background:
                "linear-gradient(246deg, rgba(53, 53, 54, 0.70) -1.67%, rgba(19, 19, 22, 0.70) 151.49%)",
            }}
          >
            <Image
              src="/assets/circle.svg"
              width={0}
              height={0}
              alt=""
              className="h-auto w-[676px] absolute top-0 left-1/2 transform -translate-x-1/2"
            />

            <Image
              src="/assets/arbitrum.svg"
              width={0}
              height={0}
              alt="Arbitrum logo"
              className="h-auto w-[40px] m-auto z-50 relative"
            />
            <h3 className="font-space-grotesk text-white md:text-36px text-3xl tracking-[1.08] font-bold leading-120 my-[29px] text-center z-50 relative">
              Running on Arbitrum
            </h3>
            <div className=" flex flex-col md:flex-row gap-[25px] mb-11">
              <div
                className="py-[110px] lg:px-[41px] md:px-6 px-4 rounded-[10px] md:w-1/2 z-50 relative"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.00) 65%), rgba(116, 118, 134, 0.05)",
                  boxShadow:
                    "0px 1px 1px 0px rgba(255, 255, 255, 0.05) inset, 0px 2px 13px 0px rgba(0, 0, 0, 0.20), 0px 1px 2px 0px rgba(0, 0, 0, 0.20)",
                  backdropFilter: "blur(3.5px)",
                }}
              >
                <p className="text-customGray-extraLight font-inter text-base font-bold leading-160 mb-2">
                  Earned:
                </p>
                <p className="text-customGray-extraLight lg:text-[51.32px] md:text-[40px] sm:text-5xl text-4xl font-inter leading-160 font-bold">
                  $8324.56{" "}
                  <span className="text-[19.32px] font-normal">USD</span>
                </p>
              </div>

              <div
                className="py-8 lg:px-7 md:px-5 px-3  rounded-[10px] md:w-1/2 z-50 z-50 relative"
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

                <div className="flex justify-between lg:gap-[21px] md:gap-4 gap-3 items-start">
                  <Image
                    src="/assets/miles-esther.png"
                    width={48}
                    height={48}
                    alt="miles esther"
                    className="border-[3.2px] border-[rgba(19,19,22,0.60)] shadow-[0px_0.534px_0px_0px_rgba(255,255,255,0.03)] rounded-full"
                  />
                  <div className="grow">
                    <div className="flex gap-[5px] items-center flex-wrap">
                      <p className="text-customGray-extraLight font-inter text-base font-bold leading-160">
                        Miles Esther
                      </p>
                      <Image
                        src="/assets/verified.svg"
                        width={0}
                        height={0}
                        alt="verified"
                        className="h-auto w-[19.3px]"
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

                <div className="flex justify-between md:gap-[21px] md:gap-4 gap-3 items-start">
                  <Image
                    src="/assets/marry-arther.png"
                    width={48}
                    height={48}
                    alt="marry arthur"
                    className="border-[3.2px] border-[rgba(19,19,22,0.60)] shadow-[0px_0.534px_0px_0px_rgba(255,255,255,0.03)] rounded-full"
                  />
                  <div className="grow">
                    <div className="flex gap-[3px] items-center flex-wrap">
                      <p className="text-customGray-extraLight font-inter text-base font-bold leading-160">
                        Marry Arthur
                      </p>
                      <Image
                        src="/assets/verified.svg"
                        width={0}
                        height={0}
                        alt="verified"
                        className="h-auto w-[19.3px]"
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

                <div className="flex justify-between md:gap-[21px] md:gap-4 gap-3 items-start">
                  <Image
                    src="/assets/Flores-Juanita.png"
                    width={0}
                    height={0}
                    alt="Flores Juanita"
                    className="h-auto w-[48px] border-[3.2px] border-[rgba(19,19,22,0.60)] shadow-[0px_0.534px_0px_0px_rgba(255,255,255,0.03)] rounded-full"
                  />
                  <div className="grow">
                    <div className="flex gap-[5px] items-center flex-wrap">
                      <p className="text-customGray-extraLight font-inter text-base font-bold leading-160">
                        Flores Juanita
                      </p>
                      <Image
                        src="/assets/verified.svg"
                        width={0}
                        height={0}
                        alt="verified"
                        className="h-auto w-[19.3px]"
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

            <div className="text-center relative z-50">
              <Button backgroundColor="bg-[#4636FF]" />
            </div>

            <Image
              src="/assets/bg-corners.svg"
              width={0}
              height={0}
              alt=""
              className="h-auto w-[254px] absolute bottom-0 right-0 transform scale-x-[-1]"
            />

            <Image
              src="/assets/bg-corners.svg"
              width={0}
              height={0}
              alt=""
              className="h-auto w-[254px] absolute bottom-0 left-0"
            />
          </div>
        </div>
      </div>
    </>
  );
}
