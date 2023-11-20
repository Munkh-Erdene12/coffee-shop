"use client";
import React from "react";
import CustomSelect from "@/components/utils/CustomSelect";
import { StockLink } from "@/app/utils/adminLink";
export default function Stock({ name }: { name: string }) {
  return (
    <div className={`mt-2 ${name}`}>
      <CustomSelect>
        {StockLink.map((el, index) => (
          <option value={el} key={index} className="capitalize">
            {el}
          </option>
        ))}
      </CustomSelect>
    </div>
  );
}
