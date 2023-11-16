"use client";
import React from "react";
import MainTitle from "../utils/MainTitle";
import MainCoffe4 from "./utils/MainCoffe4";
import { CustomBtn } from "@/components/utils/CustomBtn";
export default function MainCoffe3() {
  return (
    <>
      <MainTitle value="Coffee To Go"></MainTitle>
      <div className="container ">
        <MainCoffe4></MainCoffe4>
        <div className="flex justify-center w-full">
          <CustomBtn value="Explore more" href="/shop"></CustomBtn>
        </div>
      </div>
    </>
  );
}
