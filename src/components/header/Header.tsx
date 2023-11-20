"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { SlideTitle } from "./SlideTitle";
import { CustomImage } from "../utils/CustomImage";
import { CustomBtn } from "../utils/CustomBtn";
import icons from "../utils/icons";
import SideBar from "./SideBar";
import Logo from "../utils/Logo";
import NavItem from "./NavItem";
import Page from "./Page";
interface Slide {
  id: string;
  title: string;
  buttonText: string;
  subtitle: string;
  image: string;
}
export default function Header() {
  return <div></div>;
}
