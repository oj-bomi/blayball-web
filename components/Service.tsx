"use client";

import Image from "next/image";
import {
  PretendardBlack,
  PretendardBold,
  PretendardExtraBold,
  PretendardMedium,
  PretendardRegular,
} from "@/app/styles/fonts";

export default function Service() {
  return (
    <>
      <div className="w-full relative">
        <div className="bg-[#F0F0F0] flex items-end">
          <Image
            src="/newcourt.svg"
            alt="Main Page"
            layout="responsive"
            width={1920}
            height={951}
            priority
          />
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[78%] h-[68%]">
          <div className="mb-[7.2%]">
            <Image
              src="/LengthLogo.svg"
              alt="LengthLogo"
              width={299}
              height={123}
              className="w-[17.8vw]"
            />
          </div>
          <p
            className={`${PretendardBold.className} text-[#FF4400] text-[12px] sm:text-[3.13vw] leading-[14px] lg:leading-[71px] mb-[10px] sm:mb-[24px] lg:mb-[53.5px]`}
          >
            농구가 하고 싶을 땐{" "}
            <span className={`${PretendardBlack.className}`}>BLAYBALL</span>
          </p>

          <div
            className={`${PretendardRegular.className} text-[11px] sm:text-[2.6vw] leading-[14px] lg:leading-[59px] h-[20%] sm:h-[22.5%] lg:h-[23.3%] flex flex-col justify-between items-start`}
          >
            <p className="flex items-center">
              <span className="mr-[3px] sm:mr-[6px] lg:mr-[17px] flex">
                <Image
                  src="/checkIcon.svg"
                  alt="checkIcon"
                  width={47}
                  height={47}
                  className="inline w-[2.3vw] sm:w-[2.6vw]"
                />
              </span>
              지금 열정있는&nbsp;
              <span className={`${PretendardExtraBold.className}`}>
                당신이 주인공
              </span>
              이 될 시간!
            </p>
            <p className="flex">
              <span className="mr-[3px] sm:mr-[6px] lg:mr-[17px] flex">
                <Image
                  src="/checkIcon.svg"
                  alt="checkIcon"
                  width={47}
                  height={47}
                  className="inline w-[2.3vw] sm:w-[2.6vw]"
                />
              </span>
              <span className={`${PretendardExtraBold.className}`}>
                쉽고 빠르게&nbsp;
              </span>
              경기를 찾아보고 예약해보세요.
            </p>
          </div>
        </div>
      </div>
      <div
        className={`${PretendardMedium.className} py-[17px] sm:py-[50px] lg:py-[110px] flex flex-col items-center`}
      >
        <p className="text-[#FF4400] leading-[14px] sm:leading-[4.12vw] text-[13px] sm:text-[3.5vw]">
          어플리케이션&nbsp;
          <span className={`${PretendardBold.className}`}>제작 중</span>
        </p>

        <p
          className={`${PretendardRegular.className} text-white text-[10px] sm:text-[2.5vw] lg:text-[2.08vw] xl:leading-[47px] mt-[6px] mb-[13px] sm:mt-[17px] lg:mt-[27px] sm:mb-[24px] lg:mb-[54px]`}
        >
          아래 링크로 농구를 좋아하는 사람들과 <span className="underline">미리 소통하기</span>
        </p>


          <a href="https://open.kakao.com/o/gVaM23uf" target="_blank">
            <div className="text-[10px] sm:text-[2.65vw] bg-[#F9E000] leading-[17.8px] lg:leading-[66px] py-[1.65%] pl-[11px] pr-[12px] lg:pl-[40px] lg:pr-[47px] rounded-[56px] flex items-center mb-[7px] sm:mb-0">
              <p className="mr-[3px] sm:mr-[17px]">
                <Image
                  src="/kakaoIcon.svg"
                  alt="kakaoIcon"
                  width={69}
                  height={61}
                  className="inline w-[3.7vw]"
                />
              </p>
              <span className={`${PretendardExtraBold.className}`}>
                블레이볼&nbsp;
              </span>
              <span className={`${PretendardMedium.className}`}>
                {" "}
                오픈 채팅방 바로가기
              </span>
            </div>
          </a>

      </div>
    </>
  );
}
