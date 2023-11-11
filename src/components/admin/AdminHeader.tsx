"use client";
import React from "react";
import icons from "../utils/icons";
import { CustomImage } from "../utils/CustomImage";
import AdminAction from "./AdminAction";
import { ThemeToggle } from "@/hooks/ThemeToggle";
import { PublisherContext } from "@/context/PublisherContext";

export default function AdminHeader() {
  const ctx = React.useContext(PublisherContext);

  ThemeToggle();
  const icon = icons();
  return (
    <div className="w-full h-16 mt-4 rounded-lg flex justify-between items-center px-2 shadow-publisherShadow bg-white dark:bg-publisherDarkContent dark:shadow-publisherDarkShadow">
      <div className="bar">
        <div>
          <icon.HiMenuAlt1 className="text-[#8d8d8d]  dark:text-publisherDarkIcon" />
        </div>
      </div>
      <div className="flex items-center h-full">
        <AdminAction>
          {ctx.state.dark === "dark" ? (
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="nui-sun text-[#FACC14]  h-5 w-5"
              onClick={() => ctx.handleSwitchTheme()}
            >
              <g fill="currentColor" stroke="currentColor" className="stroke-2">
                <circle cx="12" cy="12" r="5"></circle>
                <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72 1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"></path>
              </g>
            </svg>
          ) : (
            <icon.BsMoon
              className="text-[#8d8d8d] dark:text-publisherDarkIcon"
              onClick={() => ctx.handleSwitchTheme()}
            />
          )}
        </AdminAction>
        <AdminAction>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            className="icon text-muted-400 h-5 w-5 text-[#8d8b8b]  dark:text-publisherDarkIcon"
            width="1em"
            height="1em"
            viewBox="0 0 256 256"
            data-v-26e5b7b0=""
          >
            <g fill="currentColor">
              <path
                d="M208 192H48a8 8 0 0 1-6.88-12C47.71 168.6 56 139.81 56 104a72 72 0 0 1 144 0c0 35.82 8.3 64.6 14.9 76a8 8 0 0 1-6.9 12Z"
                opacity=".2"
              ></path>
              <path d="M221.8 175.94c-5.55-9.56-13.8-36.61-13.8-71.94a80 80 0 1 0-160 0c0 35.34-8.26 62.38-13.81 71.94A16 16 0 0 0 48 200h40.81a40 40 0 0 0 78.38 0H208a16 16 0 0 0 13.8-24.06ZM128 216a24 24 0 0 1-22.62-16h45.24A24 24 0 0 1 128 216Zm-80-32c7.7-13.24 16-43.92 16-80a64 64 0 1 1 128 0c0 36.05 8.28 66.73 16 80Z"></path>
            </g>
          </svg>
        </AdminAction>
        <AdminAction>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            className="icon text-muted-400 h-5 w-5 text-[#8d8b8b] dark:text-publisherDarkIcon"
            width="1em"
            height="1em"
            viewBox="0 0 256 256"
            data-v-26e5b7b0=""
          >
            <g fill="currentColor">
              <path
                d="M112 80a32 32 0 1 1-32-32a32 32 0 0 1 32 32Zm64 32a32 32 0 1 0-32-32a32 32 0 0 0 32 32Zm-96 32a32 32 0 1 0 32 32a32 32 0 0 0-32-32Zm96 0a32 32 0 1 0 32 32a32 32 0 0 0-32-32Z"
                opacity=".2"
              ></path>
              <path d="M80 40a40 40 0 1 0 40 40a40 40 0 0 0-40-40Zm0 64a24 24 0 1 1 24-24a24 24 0 0 1-24 24Zm96 16a40 40 0 1 0-40-40a40 40 0 0 0 40 40Zm0-64a24 24 0 1 1-24 24a24 24 0 0 1 24-24Zm-96 80a40 40 0 1 0 40 40a40 40 0 0 0-40-40Zm0 64a24 24 0 1 1 24-24a24 24 0 0 1-24 24Zm96-64a40 40 0 1 0 40 40a40 40 0 0 0-40-40Zm0 64a24 24 0 1 1 24-24a24 24 0 0 1-24 24Z"></path>
            </g>
          </svg>
        </AdminAction>

        <AdminAction>
          <CustomImage img="/assets/avatar/bg.svg" alt="" name="rounded-full" />
        </AdminAction>
      </div>
    </div>
  );
}
