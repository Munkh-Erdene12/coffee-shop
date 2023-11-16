"use client";
import React from "react";
import { CustomBtn } from "../utils/CustomBtn";
import MainTitle from "../utils/MainTitle";
import MainCoffee from "./utils/MainCoffee";
export default function MainCoffe() {
  return (
    <div className="container">
      <div className="main_coffee flex justify-center items-center flex-col md:w-full h-auto">
        <div className="coffe_v1 w-full h-auto md:flex md:ite,s-center md:justify-around lg:mt-5 ">
          <div className="child_v1_1 flex justify-center items-center flex-col w-full md:flex-row">
            <div className="child md:w-full lg:w-4/5 ml-[30px] flex justify-center flex-col items-center md:items-start">
              <MainTitle
                value="We like our coffee hot and fresh"
                name="md:text-left w-[70%] md:justify-start"
              />
              <CustomBtn value="Explore More" href="/shop" name="mt-2" />
            </div>
            <MainCoffee />
          </div>
        </div>
      </div>
    </div>
  );
}
