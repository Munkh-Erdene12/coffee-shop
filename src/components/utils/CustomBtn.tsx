import React from "react";
import Link from "next/link";
type CustomBtnProps = {
  value: string;
  href: string;
  name?: string;
};
export const CustomBtn: React.FC<CustomBtnProps> = (props) => {
  return (
    <Link href={props.href}>
      <div className={`${props.name} btn_main cursor-pointer`}>
        <div className="w-28 h-10 border border-solid border-color1 relative text-color1 flex justify-center items-center text-[15px] transition hover:border-none hover:bg-color_1_hover hover:text-white after:content-['']  after:absolute after:border after:border-solid after:border-color_1_hover after:inset-x-[4px] after:inset-y-[4px]">
          <span className="font-dunbarbook ">{props.value}</span>
        </div>
      </div>
    </Link>
  );
};
export const OtherBtn = ({ value }: { value: string }) => {
  return (
    <div className="booktable-lm">
      <div className="ls">
        <div className="book">{value}</div>
      </div>
    </div>
  );
};
