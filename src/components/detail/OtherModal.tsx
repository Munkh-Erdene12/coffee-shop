"use client";
import React from "react";
import { DetailContext } from "@/context/DetailContext";
// import {DetailContext} from "@" onClick={()=> ctx.childModalToggle()}
export default function OtherModal({
  children,
}: {
  children: React.ReactNode;
}) {
  const ctx = React.useContext(DetailContext);
  return (
    <div className="w-full h-auto  absolute othModal flex justify-center items-center z-[100]">
      <div className="w-4/5  bg-white shadow-publisherShadow rounded-lg px-7 pt-7 relative md:w-2/5">
        {children}
        <div
          className="absolute top-[-8px] right-[-8px] w-10 h-10 bg-color1 rounded-full text-white  flex justify-center items-center hover:bg-color3  text-[20px] cursor-pointer"
          onClick={() => ctx.childClose()}
        >
          &times;
        </div>
      </div>
    </div>
  );
}
export const OtherModalTitle = ({ value }: { value: string }) => {
  return <p className="font-LeMonde text-color1 text-[20px]">{value}</p>;
};
export const OtherModalValue = ({ value }: { value: string }) => {
  return (
    <button className="w-full h-11 bg-color1 text-white font-dunbarbook hover:bg-color3 transition ">
      {value}
    </button>
  );
};
export const OtherModalValue1 = ({ value }: { value?: string }) => {
  const ctx = React.useContext(DetailContext);

  return (
    <button className="w-full h-11 text-color1 hover:text-color3 transition font-dunbarbook my-2" onClick={()=> ctx.childClose()}>
      Cancel
    </button>
  );
};
