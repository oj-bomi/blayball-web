"use client";

import Image from "next/image";
import { PretendardBold, PretendardRegular } from "@/app/styles/fonts";

export default function Main() {
  return (
    <div className="">
      <Image
        src="/main.webp"
        alt="Main Page"
        layout="responsive"
        width={1920}
        height={1470}
        priority
      />

      <div className="absolute flex flex-col items-center w-full h-[80%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-764">
        <p
          className={`${PretendardBold.className} text-[9px] sm:text-[2.08vw] xl:text-[40px] leading-[10px] lg:leading-[47px] text-center text-white`}
        >
          &quot;내 손안의 농구 코트&quot;
        </p>

        <div className="mt-[11px] mb-[26px] sm:mt-[5%] sm:mb-[5%] w-[45%] sm:w-[38%] max-w-[734px]">
          <Image
            src="/mainLogo.svg"
            alt="Main Logo"
            width={734}
            height={160}
            priority
          />
        </div>

        {/* 글씨 */}
        <div
          className={`${PretendardRegular.className} text-[#FF4400] bg-white leading-[24px] lg:leading-[5.2vw] text-center w-[47%] max-w-[764px] shadow-[0_0px_0px_0.3px_rgba(112,112,112,1)]`}
        >
          <div className="text-[13px] lg:text-[2.87vw] 2xl:text-[55px] shadow-[0_0px_0px_0.3px_rgba(112,112,112,1)]">
            <p>
              HELLO.{" "}
              <span className={`${PretendardBold.className}`}>
                WE ARE BLAYBALL!
              </span>
            </p>
          </div>
          <div className="text-[10px] lg:text-[2.08vw] 2xl:text-[40px] shadow-[0_0px_0px_0.3px_rgba(112,112,112,1)]">
            <p>Let’s play basketball = Let’s BLAYBALL</p>
          </div>
        </div>
      </div>
    </div>
  );
}
