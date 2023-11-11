"use client";
import React from "react";
import { PublisherContext } from "@/context/PublisherContext";
type props = {
  name: string;
  value: string;
};
export default function PublisherBtn(props: props) {
  const ctx = React.useContext(PublisherContext);
  return (
    <div
      className={`${props.name} h-9 rounded-lg flex justify-center items-center text-[15px] duration-transition cursor-pointer mt-2`}
    >
      {props.value}
    </div>
  );
}
