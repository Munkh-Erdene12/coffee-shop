import React from "react";
type props = {
  children: React.ReactNode;
  change?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};
export default function CustomSelect(props: props) {
  return (
    <select
      className="w-full h-11 border border-solid border-publisherBorder rounded-md px-1 mt-1.5 dark:border-publisherDarkBorder dark:bg-publisherCon dark:text-publisherDarkTextColor"
      onChange={props.change}
    >
      {props.children}
    </select>
  );
}
