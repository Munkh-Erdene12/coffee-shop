"use client";
import React from "react";
const DetailContext = React.createContext();

export default function DetailStore({
  children,
}: {
  children: React.ReactNode;
}) {
  const [count, setCount] = React.useState(0);
  const [size, setSize] = React.useState("L");
  const [state, setState] = React.useState({
    id: null,
    name: null,
    price: null,
    description: null,
    img: null,
    categoryID: null,
    createdAt: null,
    updatedAt: null,
    type: null,
    url: null,
    userID: null,
  });

  return (
    <DetailContext.Provider value={{ state, setState }}>
      {children}
    </DetailContext.Provider>
  );
}
