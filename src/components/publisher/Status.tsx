"use client";
import React from "react";
import { status } from "@/app/utils/adminLink";
import CustomSelect from "../utils/CustomSelect";
import { PublisherContext } from "@/context/PublisherContext";

export default function Status({
  mb,
  name,
}: {
  mb?: React.ReactNode;
  name?: string;
}) {
  const ctx = React.useContext(PublisherContext);

  return (
    <div className={`mt-2 ${name}`}>
      {mb ? (
        ""
      ) : (
        <p className="text-[#5d596c] tracking-tight text-[15px] font-light">
          Status
        </p>
      )}
      <CustomSelect change={ctx.handleSelectChange}>
        {status.map((el, index) => (
          <option key={index} value={el} className="capitalize">
            {el}
          </option>
        ))}
      </CustomSelect>
    </div>
  );
}
