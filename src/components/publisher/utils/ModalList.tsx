"use client";
import React from "react";

export default function ModalList({
  children,
  name,
}: {
  children: React.ReactNode;
  name?: string;
}) {
  return (
    <li
      className={`${name} h-12 w-full list-none py-2 px-5 flex justify-start items-center border-b border-b-solid border-b-publisherBorder text-[#6f6b7d] capitalize text-[15px]`}
    >
      {children}
    </li>
  );
}
