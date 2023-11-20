"use client";
import React from "react";

export default function ProudctContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="w-full h-auto flex flex-col mt-5 md:flex-row md:justify-between"
      id="publisher-action"
    >
      {children}
    </div>
  );
}
