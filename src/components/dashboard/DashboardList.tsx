"use client";
import React from "react";

export default function DashboardList({
  children,
  value,
}: {
  children?: React.ReactNode;
  value: string;
}) {
  return (
    <li className="flex items-center text-[#c9c8ce] first:mt-5 tracking-normal w-full rounded-md h-9 p-2 hover:bg-[#2d3253] cursor-pointer transition my-[10px] ">
      {children}
      <p className="mx-3 tracking-[1px] text-[#dbdade] text-[15px] capitalize">
        {value}
      </p>
    </li>
  );
}
