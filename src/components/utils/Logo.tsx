"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CustomImage } from "./CustomImage";
type LogoProps = {
  name?: string;
  img: string;
};
const Logo: React.FC<LogoProps> = (props) => {
  const path = useRouter();
  return (
    <Link href="/">
      <CustomImage
        img={props.img}
        alt="main logo"
        //   priority={true}
        name={props.name}
        click={() => {
          path.push("/");
        }}
      />
    </Link>
  );
};
export default Logo;
