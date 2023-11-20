"use client";
import React from "react";

export default function ProductAddTitle({ value }: { value: string }) {
  return (
    <div
      className="text-publisherTextColor1 capitalize text-[20px] leading-normal dark:text-publisherDarkTextColor1"
      id="publisherHeader"
    >
      Coffee shop /{" "}
      <span className="text-publisherTextColor dark:text-publisherDarkTextColor">
        {value}
      </span>
    </div>
  );
}
