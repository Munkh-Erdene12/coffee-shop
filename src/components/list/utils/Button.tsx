"use client";
import React from "react";

export default function ListBtn({
  children,
  name,
}: {
  children: React.ReactNode;
  name: string;
}) {
  return (
    <button className="w-44 lg:w-44 h-10 bg-publishDark last:my-3 rounded-md first:bg-[#F1F1F2] first:hover:bg-[#e6e6e6] last:bg-[#7366F0] dark:first:bg-[#424658] last:hover:bg-[#695dda] transition md:last:mx-5">
      <div className={`${name} flex justify-center items-center`}>
        {children}
      </div>
    </button>
  );
}
