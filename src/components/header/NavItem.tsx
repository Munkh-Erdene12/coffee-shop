"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Nav from "./Nav";

export default function NavItem() {
  const path = usePathname();
  return (
    <>
      <Nav
        href="/"
        value="Home"
        path={path === "/" ? "active" : ""}
        name="home"
        page={false}
      />
      <Nav
        href="/#"
        value="Pages"
        path={path === "/pages" ? "active" : ""}
        name="pages"
        page={true}
      />
      <Nav
        href="/menu"
        value="Menus"
        path={path === "/menu" ? "active" : ""}
        name="menus"
        page={false}
      />
      {/* <Nav
        href="/blog"
        value="Blog"
        path={path === "/blog" ? "active" : ""}
        name="blog"
        page={false}
      /> */}
      <Nav
        href="/shop"
        value="Shop"
        path={path === "/shop" ? "active" : ""}
        name="shops"
        page={false}
      />
      <Nav
        href="/auth/login"
        value="Login"
        path={path === "/auth/login" ? "active" : ""}
        name="logins"
        page={false}
      />
    </>
  );
}
