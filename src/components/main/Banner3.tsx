"use client";
import React from "react";
import { CustomImage } from "../utils/CustomImage";
import MainTitle from "../utils/MainTitle";
import { CustomBtn } from "../utils/CustomBtn";
export default function Banner3() {
  return (
    <div className="container">
      <section className="py-5 flex justify-center items-center flex-col md:justify-between md:flex-row md:px-5 md:my-5 ">
        <div className="w-full h-72 md:w-3/6 md:h-full">
          <CustomImage
            img="/assets/images/main_banner_3.jpg"
            alt="banner 3"
            name="w-full h-full object-contain"
          ></CustomImage>
        </div>
        <div className="flex justify-center items-center flex-col md:w-3/6 md:flex-col">
          <MainTitle value="The first choice for good coffee"></MainTitle>
          <div className="w-full flex justify-center items-center">
            <p className="w-4/5 text-center leading-[25px] font-Light text-color2 text-[17px] my-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              viverra nibh cras pulvinar. Egestas congue quisque egestas diam in
              arcu. Pretium nibh ipsum consequat nisl vel pretium.
            </p>
          </div>
          <CustomBtn value="explore more" href="#" />
        </div>
      </section>
    </div>
  );
}
