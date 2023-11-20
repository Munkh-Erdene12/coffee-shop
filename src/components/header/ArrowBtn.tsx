"use client";
import React from "react";
type ArrowBtnProps = {
  click?: () => void;
};
export default function ArrowBtn(props: ArrowBtnProps) {
  return (
    <div className="btn-arrow" onClick={props.click}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="46"
        height="16"
        fill="none"
        viewBox="0 0 46 16"
        className="w-full"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M35.5 8H.5M8 .5.5 8 8 15.5M35.5 8a5 5 0 1 0 10 0 5 5 0 0 0-10 0Z"
        ></path>
      </svg>
    </div>
  );
}
