"use client";
import React from "react";
import { PublisherContext } from "@/context/PublisherContext";
export const ThemeToggle = () => {
  let ctx = React.useContext(PublisherContext);
  React.useEffect(() => {
    const publisherElement = document.querySelector("#publisher");

    if (ctx.state.dark === "light") {
      publisherElement?.setAttribute("data-mode", "dark");
    } else {
      publisherElement?.setAttribute("data-mode", "light");
    }
  }, [ctx.state.dark]);
};
