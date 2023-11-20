"use client";
import React from "react";
import Status from "../publisher/Status";
import Category from "../utils/Category";
import Stock from "./utils/Stock";
import Title from "./utils/Title";
import ListBtn from "./utils/Button";
import icons from "../utils/icons";
export default function ProudctList({
  children,
}: {
  children: React.ReactNode;
}) {
  const icon = icons();
  return (
    <div className="w-full h-auto shadow-publisherShadow dark:shadow-publisherDarkShadow mt-6 p-5 rounded-md">
      <Title></Title>
      <div className="w-full h-auto md:flex md:justify-between">
        <Status mb={true} name="md:w-[32%]"></Status>
        <Category name="mt-2 md:w-[32%]"></Category>
        <Stock name="md:w-[32%]"></Stock>
      </div>
      <hr className="border-publisherBorder dark:border-publisherDarkBorder my-5" />
      <div className="w-3/4 h-auto md:w-full md:flex md:justify-between">
        <input
          type="text"
          className="w-full h-11 border border-solid border-publisherBorder rounded-md px-3 mt-1.5 dark:border-publisherDarkBorder dark:bg-publisherCon dark:text-publisherDarkTextColor md:w-[30%] "
          placeholder="Search products..."
        />
        <div className="flex w-full flex-wrap md:justify-end">
          <select className="w-20 h-9 my-3 dark:border-publisherDarkBorder dark:bg-publisherCon border border-solid border-publisherBorder  rounded-md px-3 md:mx-5">
            <option value="7">7</option>
            <option value="7">10</option>
            <option value="7">20</option>
            <option value="7">50</option>
            <option value="7">70</option>
            <option value="7">100</option>
          </select>
          <div>
            <ListBtn name="text-[#A7AAAE]">
              <icon.AiOutlineDownload className="w-6 h-6 " />
              Export
            </ListBtn>
            <ListBtn name="text-white mx-5">
              <icon.IoIosAdd className="w-6 h-6 " />
              Add Product
            </ListBtn>
          </div>
        </div>
      </div>
      <hr className="border-publisherBorder dark:border-publisherDarkBorder mt-3" />

      {children}
    </div>
  );
}
