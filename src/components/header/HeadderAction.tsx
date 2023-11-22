"use client";
import React from "react";
type HeaderActionProps = {
  value: string;
  count?: string;
  value1?: string;
};
export const HeaderAction: React.FC<HeaderActionProps> = (props) => {
  return (
    <>
      <span>{props.value}</span>
      {props.count && (
        <span>
          {props.value1} ({props.count})
        </span>
      )}
    </>
  );
};
