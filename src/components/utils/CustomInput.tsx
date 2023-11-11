"use client";
import React from "react";
import CustomPragraph from "../publisher/utils/CustomPragraph";
import { PublisherContext } from "@/context/PublisherContext";
type props = {
  Class?: string;
  name: string;
  pl: string;
  value?: string | undefined;
  formClass?: string | undefined;
};
export default function CustomInput(props: props) {
  const value = props.value || "";
  let ctx = React.useContext(PublisherContext);
  return (
    <form className={`${props.formClass} mt-3 w-full`}>
      <CustomPragraph value={value} />
      <input
        className={`${props.Class} h-11 border border-solid  px-4 rounded-md bg-white dark:bg-publisherCon border-publisherBorder dark:border-publisherDarkBorder mt-2 dark:text-publisherDarkTextColor `}
        name={props.name}
        placeholder={props.pl}
      />
    </form>
  );
}
