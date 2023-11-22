"use client";
import React from "react";
import { CustomImage } from "../utils/CustomImage";
import Coupon from "./Coupon";
import icons from "../utils/icons";
import { Btn, SubTotal, OrderBuy } from "./Coupon";
import { DetailContext } from "@/context/DetailContext";
export default function ReviewInput({ name }: { name: string }) {
  return (
    <input
      className={`w-full border-b border-b-solid border-b-[#D9D9D9] ${name}  focus:outline-none reviewInput px-4 font-dunbarbook text-color2 mb-5`}
    />
  );
}
export const ReviewTitle = ({ name }: { name: string }) => {
  return (
    <p className="text-[16px]  text-color2 font-dunbarbook capitalize mb-4">
      {name}
    </p>
  );
};
export const BuyModal = () => {
  const ctx = React.useContext(DetailContext);
  const icon = icons();
  const [data, setData] = React.useState({
    ...ctx.state,
    size: ctx.detail.size,
    count: ctx.detail.count,
  });
  const handleData = () => {
    setData("");
  };
  return (
    <div
      className={`w-full h-full bg-white shadow-publisherShadow absolute top-0 right-0 p-5 z-[100] md:w-2/6 transition`}
      id="buyModal"
    >
      <div className="w-full h-screen pb-10 flex flex-col justify-between overflow-hidden">
        <div className="w-full  ">
          <div className="w-full h-10 flex justify-end">
            <button
              className="w-10 h-10 border border-solid border-[#d9d9d9] rounded-full text-color2 text-[20px]"
              onClick={() => ctx.HandleBuyModalToggle()}
            >
              &times;
            </button>
          </div>
          <p className="font-LeMonde text-color1 text-[20px] mt-2 mb-8">
            Shopping Cart
          </p>
          <div className="w-full h-[250px]  overflow-auto">
            <OrderBuy state={data} click={handleData}></OrderBuy>
          </div>
        </div>
        <div className="w-full h-auto ">
          <div className="flex justify-between">
            <Coupon
              value="Note"
              icon={<icon.FaPencilAlt />}
              click={() => ctx.childModalToggle("note")}
            ></Coupon>
            <Coupon
              value="Shipping"
              icon={<icon.FiBox />}
              click={() => ctx.childModalToggle("shipping")}
            ></Coupon>
            <Coupon
              value="Coupon"
              icon={<icon.RiCouponLine />}
              click={() => ctx.childModalToggle("coupon")}
            ></Coupon>
          </div>
          <div className="my-5">
            <SubTotal value="Subtotal" value1={`₮${data.price}`}></SubTotal>
            <SubTotal value="Total" value1={`₮${data.price}`}></SubTotal>
          </div>
          <Btn value="Checkout"></Btn>
          <Btn value="View Cart"></Btn>
        </div>
      </div>
    </div>
  );
};
0;
