"use client";
import React from "react";

export default function ListCategory({
  value,
  name,
}: {
  value: string;
  name?: string;
}) {
  return (
    <div className="w-[20%] h-full flex first:justify-start justify-center items-center">
      <p className={`${name} text-[#6f6b7d] capitalize dark:text-[#b6bee3]`}>
        {value}
      </p>
    </div>
  );
}
