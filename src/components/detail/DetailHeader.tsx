"use client";
import React from "react";

export default function DetailHeader({
  children,
  value,
  click,
  name,
}: {
  children: React.ReactNode;
  value: string;
  click: () => void;
  name: boolean;
}) {
  return (
    <div>
      <div
        className={`capitalize hover:text-color_1_hover transistion flex justify-between font-LeMonde text-[20px] my-2 border-b border-b-solid border-b-[#D9D9D9] py-2 transistion cursor-pointer ${
          name ? "text-color3" : "text-color1"
        }`}
        onClick={click}
      >
        {value} <p>+</p>
      </div>
      {children}
    </div>
  );
}
