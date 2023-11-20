"use client";
import React from "react";
import { CustomImage } from "../utils/CustomImage";
import { PublisherContext } from "@/context/PublisherContext";
export default function ListAllProduct({ el }: { el: any[] }) {
  const ctx = React.useContext(PublisherContext);
  return (
    <>
      <div className="lg:w-2/4 w-full  ">
        <div className="w-full h-9 flex justify-between border-b border-b-solid border-b-publisherBorder dark:border-b-publisherDarkBorder mb-4 items-center">
          <div className="w-[15%] flex">
            <div className="w-2/4"></div>
            <div className="w-2/4 h-full text-center flex justify-center">
              <p className="uppercase tracking-normal text-[13px] text-publisherTextColor dark:text-publisherTextColor1 ">
                №
              </p>
            </div>
          </div>
          <div className="w-[85%]">
            <p className="text-publisherTextColor dark:text-publisherTextColor1 ml-3 uppercase tracking-normal text-[13px]">
              products
            </p>
          </div>
        </div>
        {Array.isArray(el)
          ? el.map((el, index) => (
              <div key={index}>
                <div className="flex w-full justify-between">
                  <div className="w-[15%] h-14  flex justify-center items-center ">
                    <div className="w-2/4 flex justify-center items-center">
                      <div
                        className="w-5 h-5 rounded-full bg-[#7366F0] hover:bg-[#695dda] transition cursor-pointer flex justify-center items-center text-white text-[13px]"
                        onClick={() => {
                          ctx.handleDataModal(el);
                          ctx.modalToggle();
                        }}
                      >
                        +
                      </div>
                    </div>
                    <div className="w-2/4 flex justify-center items-center text-publisherTextColor dark:text-publisherDarkTextColor">
                      {index + 1}
                    </div>
                  </div>
                  <div className=" w-[85%] flex h-auto md:h-14 justify-between">
                    <div className="w-[50px] h-[50px]  bg-[#F1F1F2] mx-3  rounded-md">
                      <CustomImage
                        img={`${el.url}${el.img}`}
                        alt="list product"
                        name="flex justify-center items-center w-full h-full"
                      ></CustomImage>
                    </div>
                    <ul className="w-[85%]">
                      <li className="text-[15px] text-[#6f6b7d]">{el.name}</li>
                      <li className="text-[13px] text-[#a5a3ae]">
                        {el.description.substring(0, 72)}
                      </li>
                    </ul>
                  </div>
                </div>
                <hr className="border-publisherBorder dark:border-publisherDarkBorder my-3" />
              </div>
            ))
          : []}
      </div>
    </>
  );
}
