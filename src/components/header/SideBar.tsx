"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PageData } from "@/app/utils/CompanyLink";
import icons from "../utils/icons";
import NavItem from "./NavItem";
import Nav from "./Nav";

type SidebarProps = {
  close: () => void;
};

export default function SideBar(props: SidebarProps) {
  const icon = icons();
  const path = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <ul className="sidebar">
        <div className="close">
          <icon.AiOutlineClose onClick={() => props.close()} />
        </div>
        <Nav
          href="/"
          value="Home"
          path={path === "/" ? "active" : ""}
          name="home"
          page={false}
        />
        <div className="page_1">
          <li onClick={() => setIsOpen(!isOpen)}>
            Pages
            {isOpen ? (
              <icon.HiOutlineArrowSmUp />
            ) : (
              <icon.HiOutlineArrowSmDown />
            )}
          </li>
          <ul className={`other_page ${isOpen ? "show" : ""}`}>
            {PageData.map((el, index) => (
              <li key={index} className="page_li">
                <Link href={el.href} className="page_a">
                  {el.value}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Nav
          href="/menu"
          value="Menus"
          path={path === "/menus" ? "active" : ""}
          name="menus"
          page={false}
        />
        <Nav
          href="/blog"
          value="Blog"
          path={path === "/blog" ? "active" : ""}
          name="blog"
          page={false}
        />
        <Nav
          href="/shop"
          value="Shop"
          path={path.startsWith("/shop/*") ? "active" : ""}
          name="shop"
          page={false}
        />
      </ul>
    </>
  );
}
