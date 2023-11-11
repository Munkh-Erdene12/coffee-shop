"use client";
import React from "react";
import { PublisherContext } from "@/context/PublisherContext";
type props = {
  children: React.ReactNode;
};
export default function PublisherCon(props: props) {
  let ctx = React.useContext(PublisherContext);
  return (
    <div className="w-full h-auto flex flex-col mt-5  p-4 rounded-lg  bg-white dark:bg-publisherCon shadow-publisherShadow dark:shadow-publisherDarkShadow">
      {props.children}
    </div>
  );
}
