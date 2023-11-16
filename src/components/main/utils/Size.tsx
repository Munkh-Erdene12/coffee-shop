"use client";
import React from "react";
type SizeProps = {
  value: string;
};
export default function Size(props: SizeProps) {
  return (
    <div className="size w-8 h-8 flex justify-center items-center bg-white rounded-full mx-2 font-dunbarbook text-[14px] shadow-shadow2 cursor-pointer transition hover:text-white hover:bg-color_1_hover">
      {props.value}
    </div>
  );
}
