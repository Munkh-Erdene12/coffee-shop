"use client";
import React from "react";
import Link from "next/link";
import icons from "../utils/icons";
import { PageData } from "@/app/utils/CompanyLink";
type NavProps = {
  name: string;
  path: string;
  href: string;
  value: string;
  page: boolean;
};
export default function Nav(props: NavProps) {
  const icon = icons();
  return (
    <li className={props.name}>
      <Link href={props.href} className={props.path}>
        {props.value}
        <icon.HiOutlineArrowSmDown />
      </Link>
      {props.page && (
        <ul className="other_page">
          {PageData.map((el, index) => (
            <li key={index} className="page_li">
              <Link href={el.href} className="page_a">
                {el.value} <icon.HiArrowSmRight />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
