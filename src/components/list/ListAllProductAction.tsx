"use client";
import React from "react";
import ListCategory from "./utils/ListCategory";
import { categoryLinks } from "@/app/utils/adminLink";
export default function ListAllProductAction({ el }: { el: any }) {
  return (
    <div className="md:w-2/4 w-full hidden lg:flex ">
      <div className="w-full h-full flex-col flex ">
        <div className="w-full h-9 flex justify-between border-b border-b-solid border-b-publisherBorder dark:border-b-publisherDarkBorder mb-4 items-center text-center">
          {categoryLinks.map((el, index) => (
            <p
              key={index}
              className="uppercase text-center w-full h-full flex  justify-center items-center  tracking-normal text-[13px] text-publisherTextColor dark:text-publisherTextColor1"
            >
              {el}
            </p>
          ))}
        </div>
        {Array.isArray(el)
          ? el.map((el, index) => (
              <div key={index}>
                <div className=" w-full flex h-14 justify-between">
                  <ListCategory
                    name="text-[14px]"
                    value={el.category.name}
                  ></ListCategory>
                  <ListCategory value={"₮" + el.price}></ListCategory>
                  <ListCategory
                    value={el.selectedStatus}
                    name="text-[#28c76f] dark:text-[#28c76f]"
                  ></ListCategory>
                  <ListCategory value={el.createduser}></ListCategory>
                  <ListCategory value={el.barCode}></ListCategory>
                </div>
                <hr className="border-publisherBorder dark:border-publisherDarkBorder my-3" />
              </div>
            ))
          : []}
      </div>
    </div>
  );
}
