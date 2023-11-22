"use client";
import React from "react";
import icons from "../utils/icons";
import { CustomImage } from "../utils/CustomImage";
import OtherModal from "./OtherModal";
import { DetailContext } from "@/context/DetailContext";
export default function Coupon({
  icon,
  value,
  click,
}: {
  icon: React.ReactElement;
  value: string;
  click: () => void;
}) {
  return (
    <div
      className="flex h-7 justify-center items-center text-color2 w-[30%] cursor-pointer font-dunbarbook hover:text-color3 transition border-r border-r-solid border-r-color2 last:border-none"
      onClick={click}
    >
      {icon}
      <p className="mx-2">{value}</p>
    </div>
  );
}
export const Btn = ({ value }: { value: string }) => {
  return (
    <div className="w-full h-11 bg-color3  my-3 rounded-[30px] last:bg-white last:border last:border-solid last:border-[#000] flex justify-center items-center text-white last:text-color1 font-dunbarbook text-[18px] last:hover:bg-color3 last:hover:border-color3 transition last:hover:text-white">
      {value}
    </div>
  );
};
export const SubTotal = ({
  value,
  value1,
}: {
  value: string;
  value1: string;
}) => {
  return (
    <div className=" my-2 flex justify-between text-[18px] ">
      <span className="text-color2 font-dunbarbook ">{value}:</span>
      <span className="text-color1 font-dunbarbook">{value1}</span>
    </div>
  );
};
export const OrderBuy = ({
  state,
  click,
}: {
  state: any;
  click: () => void;
}) => {
  const [count, setCount] = React.useState(0);
  const icon = icons();
  let ctx = React.useContext(DetailContext);
  return (
    <>
      <div className="flex w-full my-5">
        <div className="w-16 h-16 border boder-solid border-[#d9d9d9] flex justify-center items-center">
          {/* <CustomImage
            img={`${state.url}${state.img}`}
            alt="shop"
            name="h-full w-full objec-cover"
          /> */}
        </div>
        <div className="ml-5 flex justify-between w-9/12">
          <div>
            <p className="font-dunbarbook text-color1 text-[20px]">
              {state.name}
            </p>
            <p className="font-Light text-color2">₮{state.price}</p>
            <p className="font-Light  text-color2">Size: {state.size}</p>
            <div className="w-20 h-7 font-Light border border-solid boder-[#d9d9d9] flex justify-between text-color2 mt-2">
              <button
                className="w-2/6 border-r border-r-solid border-r-[#d9d9d9] text-color2 flex justify-center items-center"
                onClick={() => ctx.handleCountMininus()}
              >
                <icon.FiMinus></icon.FiMinus>
              </button>
              {state.count}
              <button
                className="w-2/6 border-l border-l-solid border-l-[#d9d9d9] text-color2 flex justify-center items-center"
                onClick={() => ctx.handleCountPlus()}
              >
                <icon.GoPlus></icon.GoPlus>
              </button>
            </div>
          </div>
          <div
            className="text-color1 text-[20px] cursor-pointer hover:text-color3 transition"
            onClick={() => {
              click();
              ctx.closeModal();
            }}
          >
            &times;
          </div>
        </div>
      </div>
    </>
  );
};
