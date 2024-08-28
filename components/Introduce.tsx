"use client";
import Image from "next/image";
import { PretendardRegular, PretendardExtraBold } from "@/app/styles/fonts";

export default function Introduce() {
  return (
    <div className="bg-[#F0F0F0] flex flex-col items-center">
      <div className="pt-[72px] pb-[35px] lg:pt-[168px] lg:pb-[113px]">
        <Image
          src="/icon.png"
          alt="Introduce Page Icon"
          width={192}
          height={192}
          className="hidden xl:block"
        />
        <Image
          src="/icon.png"
          alt="Introduce Page Icon"
          width={92}
          height={92}
          className="block xl:hidden"
        />
      </div>

      <div
        className={`${PretendardRegular.className} text-[1rem] lg:text-[2.6vw] xl:text-[3.125rem] text-center leading-[3rem] xl:leading-[3.75rem]`}
      >
        <p className="xl:mb-[2.3125rem]">
          밖에서{" "}
          <span className={`${PretendardExtraBold.className}`}>
            혼자 농구하신 경험
          </span>{" "}
          있으신가요?
        </p>
        <p className="xl:mb-[2.3125rem]">
          농구하고 싶은데{" "}
          <span className={`${PretendardExtraBold.className}`}>
            비나 눈 때문에 못한 경험
          </span>{" "}
          있으신가요?
        </p>
        <p className="xl:mb-[2.3125rem]">
          농구{" "}
          <span className={`${PretendardExtraBold.className}`}>
            3vs3, 5vs5 게임
          </span>
          을 하고 싶으신가요?
        </p>
        <p>
          <span className={`${PretendardExtraBold.className}`}>
            실내에서 농구 게임
          </span>
          을 하고 싶으신가요?
        </p>
      </div>
      <div className="relative lg:pt-[6rem] lg:pb-[85px] w-full">
        <Image
          src="/blayballScreen.svg"
          alt="blayball screen"
          width={807}
          height={1356}
          className="m-auto sm:w-[42vw]"
        />
        <Image
          src="/promotionalArticle.svg"
          alt="promotional article"
          width={1600}
          height={734}
          className="absolute top-[27%] left-1/2 -translate-x-1/2 -translate-y-1/4 px-[10px] sm:px-[100px]"
        />
      </div>

      <div className="relative w-full">
        <div className="bg-black relative h-[250px] lg:h-[526px]">
          <Image
            src="/darkBackgroundcut.webp"
            alt="darkBackgroundcut"
            fill
            
            style={{ objectFit: 'cover' }}
            className="opacity-25"
          />
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex flex-col items-center">
          <div>
            <Image
              src="/basketballCourtIcon.svg"
              alt="basketballCourtIcon"
              width={152}
              height={152}
              className="hidden lg:block"
            />
            <Image
              src="/basketballCourtIcon.svg"
              alt="basketballCourtIcon"
              width={100}
              height={100}
              className="block lg:hidden mb-20px"
            />
          </div>

          <div
            className={`${PretendardRegular.className} text-white flex flex-col items-center xl:leading-[59px] text-[4vw] sm:text-basevw 2xl:text-[50px]`}
          >
            <p className="my-[0px] xl:my-[37px] text-center">
              이젠 미리 실외에서도 실내에서도
              <span className="block xl:inline">
                {" "}
                농구장에 인원수를 파악하고 농구를 즐겨보세요.
              </span>
            </p>
            <p className="">
              근처 실내 구장을 검색하고 5vs5 즐거운 게임을 즐겨보세요.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
