"use client";
import React from "react";
export const FinanceContext = React.createContext();
export default function FinanceStore({ children }) {
  const [state, setState] = React.useState({
    wishlist: 0,
  });

  return (
    <FinanceContext.Provider value={{ state }}>
      {children}
    </FinanceContext.Provider>
  );
}
