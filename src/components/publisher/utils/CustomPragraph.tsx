"use client";
import React from "react";
type props = {
  value: string;
};
export default function CustomPragraph(props: props) {
  return (
    <p className="text-[#5d596c] tracking-tight text-[15px] font-light dark:text-publisherDarkTextColor">
      {props.value}
    </p>
  );
}
