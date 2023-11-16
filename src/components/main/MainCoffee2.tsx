"use client";
import React from "react";
import MainTitle from "../utils/MainTitle";
import MainCoffeBanner2 from "./utils/MainCoffeBanner2";
export default function MainCoffee2() {
  return (
    <section className="main_coffe_2 bg-maincoffee2 w-full mt-20 lg:p-5 text-center">
      <div className="container">
        <MainTitle
          value="The Coffee Herald"
          name="pt-8 pb-1.5 lg:p-6 md:w-full md:text-center"
        />
        <div className="sm_main md:mt-6 md:flex md:items-center lg:flex lg:justify-center lg:items-center">
          <MainCoffeBanner2 />
        </div>
      </div>
    </section>
  );
}
