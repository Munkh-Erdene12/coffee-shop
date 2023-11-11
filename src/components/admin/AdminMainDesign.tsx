"use client";
import React from "react";
import AdminHeader from "@/components/admin/AdminHeader";
import { PublisherContext } from "@/context/PublisherContext";
type props = {
  children?: React.ReactNode;
};
export default function AdminMainDesign(props: props) {
  const ctx = React.useContext(PublisherContext);
  return (
    <div className="w-full flex flex-col md:flex-row h-full bg-publisher dark:bg-publishDark">
      <div className="h-screen hidden md:flex md:w-3/12 bg-black"></div>
      <div className="w-full h-ful px-5 md:px-8">
        <AdminHeader />
        {props.children}
      </div>
    </div>
  );
}
