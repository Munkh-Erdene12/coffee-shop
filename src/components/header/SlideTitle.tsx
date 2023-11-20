"use client";
import React from "react";
import { CustomBtn } from "../utils/CustomBtn";
type SlideTitleProps = {
  mod?: string;
  title?: string;
  subtitle?: string;
  sm?: string;
  buttonText?: string;
  btn_mod?: string;
  sml?: string;
};
export const SlideTitle: React.FC<SlideTitleProps> = (props) => {
  return (
    <>
      <span className={`title ${props.mod ? props.mod : ""}`}>
        {props.title}
      </span>
      {props.subtitle && (
        <div className={`subtitle ${props.sm ? props.sm : ""}`}>
          <span className="sub">{props.subtitle}</span>
        </div>
      )}
      {props.buttonText && (
        <div
          className={`btn ${
            props.btn_mod ? props.btn_mod : props.sml ? props.sml : ""
          }`}
        >
          <CustomBtn value={props.buttonText} href="" />
        </div>
      )}
    </>
  );
};
