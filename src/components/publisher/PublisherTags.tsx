"use client";
import React from "react";
import icons from "../utils/icons";
import { PublsherTags } from "@/app/utils/adminLink";
export default function PublisherTags() {
  const icon = icons();
  return (
    <div className="mt-4 ">
      <p className="text-[#5d596c] tracking-tight text-[15px] font-light cursor-pointer">
        Tags
      </p>
      <div className="w-full h-auto border border-solid border-publisherBorder rounded-md flex flex-wrap mt-2 dark:border-publisherDarkBorder">
        {PublsherTags.map((el, index) => (
          <div
            key={index}
            className="w-24 h-8 bg-[#F1F1F2] mx-3 flex items-center justify-between  my-2 p-2 rounded-md hover:bg-[#DBDADE] hover:text-[#6E6B7D] mainHover publisher-tags dark:bg-[#424659] cursor-pointer"
          >
            <p className="text-[13px] text-[#6f6b7d] dark:text-[#b6bee3]">
              {el.value}
            </p>
            <div className="w-4 h-4 rounded-full hover:bg-[red] cursor-pointer transition">
              <icon.AiOutlineClose className="rounded-full p-0.5 text-[#6f6b7d] hover:text-[white] dark:text-[#b6bee3] " />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
