"use client";
import React from "react";
import Image from "next/image";

type CustomImageProps = {
  img: string;
  alt: string;
  name?: string;
  click?: () => void;
};
export const CustomImage: React.FC<CustomImageProps> = (props) => {
  return (
    <Image
      src={props.img}
      alt={props.alt}
      width={5000}
      height={5000}
      className={props.name}
      priority={true}
      onClick={props.click}
    />
  );
};
