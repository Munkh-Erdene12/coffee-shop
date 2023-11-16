"use client";
import React from "react";
import { CustomImage } from "@/components/utils/CustomImage";
import { CustomBtn } from "@/components/utils/CustomBtn";
import { MainCoffee2 } from "@/app/utils/CompanyLink";

export default function MainCoffeBanner2() {
  return (
    <>
      {MainCoffee2.map((el) => (
        <div
          className="lakit-iconbox w-full h-full my-5  lg:transitionLiner cursor-pointer hover:scale-[1.1]"
          key={el.id}
        >
          <div className="lakit_img w-full h-[180px] lg:h-64">
            <CustomImage
              img={el.image}
              alt={`lakit_img_${el.id}`}
              name="w-full h-full object-contain"
            />
          </div>
          <div className="lakit_header w-full h-auto flex justify-center items-center pb-12 flex-col">
            <div className="lakit-title text-[24px] my-5 font-dunbarbook text-color1 lg:text-[28px]">
              {el.title}
            </div>
            <div className="lakit-desc text-color2 w-[90%] text-[18px] font-Light text-center mb-5">
              {el.subtitle}
            </div>
            <CustomBtn value={el.buttonText} href="" />
          </div>
        </div>
      ))}
    </>
  );
}
