"use client";
import Image from "next/image";
import { PretendardRegular, PretendardExtraBold } from "@/app/styles/fonts";

export default function Introduce() {
  return (
    <div className="bg-[#F0F0F0] flex flex-col items-center">
      <div className="pt-[28px] pb-[22px] lg:pt-[168px] lg:pb-[113px] w-full flex justify-center">
        <Image
          src="/icon.png"
          alt="Introduce Page Icon"
          width={192}
          height={192}
          className="w-[10%] sm:w-[9%]"
        />
     
      </div>

      <div
        className={`${PretendardRegular.className} text-[11px] lg:text-[2.6vw] xl:text-[3.125rem] text-center leading-[13px] sm:leading-[3.75rem]`}
      >
        <p className="mb-[5px] xl:mb-[2.3125rem]">
          밖에서{" "}
          <span className={`${PretendardExtraBold.className}`}>
            혼자 농구하신 경험
          </span>{" "}
          있으신가요?
        </p>
        <p className="mb-[5px] xl:mb-[2.3125rem]">
          농구하고 싶은 날{" "}
          <span className={`${PretendardExtraBold.className}`}>
            눈이나 비와서 못한 경험
          </span>{" "}
          있으신가요?
        </p>
        <p className="mb-[5px] xl:mb-[2.3125rem]">
          농구{" "}
          <span className={`${PretendardExtraBold.className}`}>
            3vs3, 5vs5 게임
          </span>
          을 하고 싶으신가요?
        </p>
        <p>
          <span className={`${PretendardExtraBold.className}`}>
            실내에서도 농구
          </span>
          가 하고 싶으신가요?
        </p>
      </div>
      <div className="relative pt-[23px] lg:pt-[6rem] pb-[17px] lg:pb-[85px] w-full my-[3px]">
        <Image
          src="/blayballScreen.jpg"
          alt="blayball screen"
          width={807}
          height={1356}
          className="m-auto w-[42vw]"
        />
        <Image
          src="/promotionalArticle.svg"
          alt="promotional article"
          width={1600}
          height={734}
          className="absolute top-[30%] sm:top-[27%] left-1/2 -translate-x-1/2 -translate-y-1/4 px-[43px] sm:px-[100px]"
        />
      </div>

      <div className="relative w-full">
        <div className="bg-black relative aspect-[1920/501]">
          <Image
            src="/darkBackgroundcut.webp"
            alt="darkBackgroundcut"
            fill
            style={{ objectFit: 'cover' }}
            className="opacity-25"
          />
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex flex-col items-center">
          <div className="w-full flex justify-center">
            <Image
              src="/basketballCourtIcon.svg"
              alt="basketballCourtIcon"
              width={152}
              height={152}
              className="w-[7%]"
            />

          </div>

          <div
            className={`${PretendardRegular.className} text-white flex flex-col items-center leading-[13px] xl:leading-[59px] text-[11px] sm:text-basevw 2xl:text-[50px]`}
          >
            <p className="my-[3px] sm:my-[37px] text-center">
            이젠 실외에서도 실내에서도 근처 농구장을 검색하고 해당 농구장에 인원수에 맞춰
            </p>
            <p className="my-[3px]">
            3vs3, 5vs5 즐거운 게임에 참여해보세요.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
