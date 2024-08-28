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
        <div className="bg-[#F0F0F0] h-screen xl:h-auto flex items-end">
          <Image
            src="/newcourt.svg"
            alt="Main Page"
            layout="responsive"
            width={1920}
            height={1378}
            priority
            className="hidden sm:block"
          />

          <Image
            src="/newcourt2.svg"
            alt="Main Page"
            layout="responsive"
            width={375}
            height={667}
            className="block sm:hidden"

          />
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[78%] h-[79%]">
          <div className="mb-[7.2%]">
            <Image
              src="/LengthLogo.svg"
              alt="LengthLogo"
              width={299}
              height={123}
              className="w-[40vw] sm:w-[16vw]"
            />
          </div>
          <p
            className={`${PretendardBold.className} text-[#FF4400] text-[5vw] sm:text-[3.13vw] leading-[71px] sm:mb-[53.5px]`}
          >
            농구가 하고 싶을 땐{" "}
            <span className={`${PretendardBlack.className}`}>BLAYBALL</span>
          </p>

          <div
            className={`${PretendardRegular.className} text-[4vw] sm:text-[2.6vw] sm:leading-[59px] h-[9%] sm:h-[23.3%] flex flex-col justify-between mb-[7.2%]`}
          >
            <p className="flex">
              <span className="mr-[10px] sm:mr-[17px] flex">
                <Image
                  src="/checkIcon.svg"
                  alt="checkIcon"
                  width={47}
                  height={47}
                  className="inline w-[6vw] sm:w-[2.6vw]"
                />
              </span>
              지금 열정있는&nbsp;
              <span className={`${PretendardExtraBold.className}`}>
                당신이 주인공
              </span>
              이 될 시간!
            </p>
            <p className="flex">
              <span className="mr-[10px] sm:mr-[17px] flex">
                <Image
                  src="/checkIcon.svg"
                  alt="checkIcon"
                  width={47}
                  height={47}
                  className="inline w-[6vw] sm:w-[2.6vw]"
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
        className={`${PretendardMedium.className} py-[50px] sm:py-[110px] flex flex-col items-center`}
      >
        <p className="text-[#FF4400] leading-[2rem] xl:leading-[4.12vw] text-[1.5rem] xl:text-[3.5vw]">
          어플리케이션&nbsp;
          <span className={`${PretendardBold.className}`}>제작 중</span>
        </p>

        <p
          className={`${PretendardRegular.className} text-white sm:text-[2.08vw] xl:leading-[47px] mt-[10px] mb-[25px] sm:mt-[27px] sm:mb-[54px]`}
        >
          아래 링크로 농구를 좋아하는 사람들과 미리 소통하기
        </p>

        <div>
          <a href="https://open.kakao.com/o/gVaM23uf" target="_blank">
            <div className="lg:text-[2.65vw] bg-[#F9E000] xl:leading-[66px] py-[1.65%] pl-[15px] pr-[17px] sm:pl-[40px] sm:pr-[47px] rounded-[56px]">
              <span className="mr-[17px]">
                <Image
                  src="/kakaoIcon.svg"
                  alt="kakaoIcon"
                  width={69}
                  height={61}
                  className="inline w-[8vw] sm:w-[3.7vw]"
                />
              </span>
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
      </div>
    </>
  );
}
