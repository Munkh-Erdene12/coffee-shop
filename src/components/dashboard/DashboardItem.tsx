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
      <DashboardList value="Email">
        <icon.HiOutlineMailOpen className="w-4 h-4" />
      </DashboardList>
      <DashboardList value="Chat">
        <icon.HiOutlineChatAlt2 className="w-4 h-4" />
      </DashboardList>
      <DashboardList value="calender">
        <icon.HiOutlineChatAlt2 className="w-4 h-4" />
      </DashboardList>
    </ul>
  );
}
