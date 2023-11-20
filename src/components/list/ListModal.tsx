"use client";
import React from "react";
import Shadow from "../utils/Shadow";
import { categoryLinks } from "@/app/utils/adminLink";
import ModalList from "../publisher/utils/ModalList";
import { PublisherContext } from "@/context/PublisherContext";
import { CustomImage } from "../utils/CustomImage";
import icons from "../utils/icons";
export default function ListModal() {
  const ctx = React.useContext(PublisherContext);
  const icon = icons();
  const [input, setInput] = React.useState(true);
  const arr = [
    ctx.modalData.category.name,
    ctx.modalData.price,
    ctx.modalData.selectedStatus,
    ctx.modalData.createdUser,
    ctx.modalData.barCode,
  ];
  return (
    <div className="w-full h-screen absolute top-0 left-0">
      <Shadow></Shadow>
      <div className="w-[80%] h-auto  bg-white absolute z-[60] left-[50%] top-[50%] center shadow-publisher dark:shadow-publisherDarkShadow dark:bg-publishDark rounded-md md:w-[40%]">
        <div className="mx-5 mt-6 text-publisherTextColor dark:text-publisherDarkTextColor text-[22px] mb-3">
          Detail of {ctx.modalData.name && ctx.modalData.name}
        </div>
        <div className="flex justify-between h-16 w-full  ">
          <p className="mx-5  w-1/5 h-full flex justify-start items-center text-[#6f6b7d]">
            Product:
          </p>
          <div className="mx-5 flex justify-start items-center h-full w-4/5">
            <div className="bg-[#f2f2f3] w-10 h-10 rounded-sm mr-3">
              <CustomImage
                img={`${ctx.modalData.url && ctx.modalData.url}${
                  ctx.modalData.img && ctx.modalData.img
                }`}
                alt=""
              ></CustomImage>
            </div>
            <div className="w-4/5">
              {input ? (
                <>
                  <input
                    defaultValue={ctx.modalData.name}
                    className="w-full focus:outline-none text-[#27ae60]"
                  ></input>
                  <input
                    defaultValue={ctx.modalData.description}
                    className="w-full focus:outline-none text-[#27ae60]"
                  ></input>
                </>
              ) : (
                <>
                  <p className="text-[#6f6b7d] text-[15px]">
                    {ctx.modalData.name && ctx.modalData.name}
                  </p>
                  <p className="hidden md:flex text-publisherTextColor1 dark:text-publisherDarkTextColor1 font-light  text-[14px]">
                    {ctx.modalData.description &&
                      ctx.modalData.description.substring(0, 52)}
                    ...
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
        <hr className="w-full border-publisherBorder dark:border-publisherDarkBorder" />
        <div className="w-full h-auto flex justify-between">
          <div className="w-2/5">
            {categoryLinks.map((el, index) => (
              <ModalList key={index}>{el}</ModalList>
            ))}
          </div>
          <div className="w-3/5 flex justify-start flex-col">
            {input
              ? arr.map((el: any, index: number) => (
                  <input
                    key={index}
                    className="h-12 w-full list-none py-2 px-5 flex justify-start items-center border-b border-b-solid border-b-publisherBorder text-[#27ae60] capitalize text-[15px] focus:outline-none "
                    defaultValue={el}
                  />
                ))
              : arr.map((el: any, index: number) => (
                  <ModalList key={index}>{el}</ModalList>
                ))}
          </div>
        </div>
        <div className="flex justify-between">
          <div className="text-[#6f6b7d] capitalize text-[15px] h-12 w-2/5 pt-2 px-5  ">
            Actions:
          </div>
          <div className="w-3/5 h-12 flex pt-2 px-5 ">
            <icon.FaRegEdit className="mr-3"></icon.FaRegEdit>
            <icon.FaTrashAlt></icon.FaTrashAlt>
          </div>
        </div>
      </div>
    </div>
  );
}
