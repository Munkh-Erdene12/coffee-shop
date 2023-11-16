"use client";
import React from "react";
type MainTitleProps = {
  value?: string;
  name?: string;
};
export default function MainTitle(props: MainTitleProps) {
  return (
    <div
      className={`${props.name} main-title w-full h-auto flex justify-center text-center`}
    >
      <div className="w-[70%] font-dunbarbook text-[28px] md:text-[42px] capitalize">
        {props.value}
      </div>
    </div>
  );
}
