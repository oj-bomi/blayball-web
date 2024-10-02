"use client";

import { PretendardBold, PretendardRegular } from "@/app/styles/fonts";

export default function Footer() {
  return (

<div className="col text-center text-md-start bg-black py-[50px]">
   
   <p className="mb-0 text-white py-[5px] text-[10px] sm:text-[1vw]">
     오제이 주식회사(OJ Inc.)<span className="middot">/</span>블레이볼(blayball)
    </p>

    <p className="mb-0 text-white py-[5px] text-[10px] sm:text-[1vw]">
    CEO 오지완<span className="middot">/</span>CBO 강영모<span className="middot">/</span> Business Registration No141-81-49244
    </p>

   <p className="mb-0 text-white py-[5px] text-[10px] sm:text-[1vw]">
    경기도 파주시 회동길 37-14<span className="middot">/</span>TEL. 031-947-0792<span className="middot">/</span>Email : info@oj.vision
   </p>
   <p className="mb-0 text-white py-[5px] text-[10px] sm:text-[1vw]">
     Copyrights © 2024 All Rights Reserved by OJ Inc.
   </p>

</div>


  );
}
