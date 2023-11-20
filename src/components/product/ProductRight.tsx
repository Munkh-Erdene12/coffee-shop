"use client";
import React from "react";
import PublisherCon from "../publisher/PublisherCon";
import Category from "../utils/Category";
import Status from "../publisher/Status";
import PublisherTags from "../publisher/PublisherTags";
import CustomPragraph from "../publisher/utils/CustomPragraph";
import CustomInput from "../utils/CustomInput";
import { PublisherContext } from "@/context/PublisherContext";

export default function ProductAddRight() {
  const ctx = React.useContext(PublisherContext);
  return (
    <div className="w-full md:w-1/3" id="publisher-right">
      <PublisherCon>
        <CustomPragraph value="Organize" />
        <Category>
          <p className="text-[#5d596c] tracking-tight text-[15px] font-light dark:text-publisherDarkTextColor">
            Category
          </p>
        </Category>
        <Status />
        <PublisherTags />
      </PublisherCon>
      <PublisherCon>
        <CustomPragraph value="Pricing"></CustomPragraph>
        <CustomInput
          name="price"
          pl="Price"
          Class="w-full"
          formClass="mt-5"
          value="Base price"
          change={ctx.handleChangeValue}
        />
        <CustomInput
          name="discountedPrice"
          pl="Discounted price"
          Class="w-full"
          value="Discounted price"
          change={ctx.handleChangeValue}
        />
        <hr className="border-publisherBorder dark:publisherDarkBorder mt-8" />
        <div className="mt-5">
          <CustomPragraph value="In Stock" />
        </div>
      </PublisherCon>
    </div>
  );
}
