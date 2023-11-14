"use client";
import React from "react";
import DashboardList from "./DashboardList";
import icons from "../utils/icons";
export default function DashboardItem() {
  const icon = icons();
  return (
    <ul>
      <p className="mt-5 uppercase text-[#a0a0ac] text-[13px] font-light tracking-wide	">
        apps & pages
      </p>
    </ul>
  );
}
