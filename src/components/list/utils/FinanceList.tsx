"use client";
import React from "react";

export default function FinanceList({
  children,
  name,
}: {
  children: React.ReactNode;
  name?: string;
}) {
  return (
    <div
      className={`${name} h-full w-full  flex justify-between  dark:border-b-publisherDarkBorder list dark:dark md:flex md:justify-center md:items-center `}
    >
      <div className="w-4/5">
        <p className="text-publisherTextColor text-[13px] font-medium dark:text-publisherDarkTextColor my-2 capitalize">
          in-store sales
        </p>
        <p className=" text-publisherTextColor text-[20px] font-medium dark:text-publisherDarkTextColor ">
          $5,555.32
        </p>
        <div className="text-publisherTextColor1 dark:text-publisherDarkTextColor1 text-[15px] font-light my-2">
          5k orders
        </div>
      </div>
      <div className="w-1/5 h-full mt-3">
        <div className="h-10 w-10 flex justify-center items-center rounded-md bg-[#F2F2F3] dark:bg-[#424658] ">
          {children}
        </div>
      </div>
    </div>
  );
}
