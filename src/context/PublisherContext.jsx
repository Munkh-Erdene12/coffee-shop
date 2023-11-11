"use client";
import React from "react";
export const PublisherContext = React.createContext();
export default function PublisherStore(props) {
  const [state, setState] = React.useState({
    price: null,
    discountedPrice: null,
    status: null,
    tags: null,
    category: null,
    dark: "dark",
  });

  const handleWriteChange = (value) => {
    setWrite((prev) => {
      return { ...prev, [value]: !prev[value] };
    });
  };
  const handleSwitchTheme = () => {
    console.log("kk");
    setState((prev) => {
      return {
        ...prev,
        dark: prev.dark === "dark" ? "light" : "dark",
      };
    });
  };
  return (
    <PublisherContext.Provider
      value={{ state, handleWriteChange, handleSwitchTheme }}
    >
      {props.children}
    </PublisherContext.Provider>
  );
}
