"use client";
import React from "react";
import { CustomImage } from "@/components/utils/CustomImage";
type props = {
  img: string;
  name?: string;
};
export default function MainInformation2_child(props: props) {
  return (
    <div className={`information_child w-full h-full `}>
      <figure className="transition w-full h-full overflow-hidden cursor-pointer">
        <CustomImage
          img={props.img}
          alt="img"
          name={`w-full h-full transition overflow-hidden hover:scale-[1.1]  object-cover ${props.name}`}
        />
      </figure>
    </div>
  );
}
