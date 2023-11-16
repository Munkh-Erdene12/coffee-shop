"use client";
import React from "react";
import { CustomImage } from "@/components/utils/CustomImage";
import { CustomBtn } from "@/components/utils/CustomBtn";
export default function Information() {
  return (
    <div className="w-full h-auto" id="main">
      <div className="child_logo w-full h-[150px] mt-5 ">
        <CustomImage
          img="/assets/logo/subLogo.png"
          alt="sub logo"
          name="w-full h-full object-contain"
        />
      </div>
      <div className="information flex flex-col items-center mt-5 px-4">
        <div className="title w-full h-[100px]">
          <CustomImage
            img="/assets/images/title.png"
            alt="tilte png"
            name="w-full h-full object-contain"
          ></CustomImage>
        </div>
        <div className="banner_3 mt-5 md:justify-center md:flex ">
          <p
            className="lorem text-color2 text-center text-[1rem]
            font-dunbarbook leading-[26px] tracking-[1px] md:w-6/12
            "
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            viverra nibh cras pulvinar. Egestas congue quisque egestas diam in
            arcu. Pretium nibh ipsum consequat nisl vel pretium.
          </p>
        </div>
        <div className="btn mt-5">
          <CustomBtn value="explore more" href="/shop" />
        </div>
      </div>
    </div>
  );
}
