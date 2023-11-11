"use client";
import React, { ReactNode } from "react";

interface AdminActionProps {
  children: ReactNode;
}

export default function AdminAction({ children }: AdminActionProps) {
  return (
    <div className="w-10 h-10 cursor-pointer  mx-1 rounded-full border border-solid border-publisherBorder flex items-center justify-center dark:border-publisherDarkBorder">
      {children}
    </div>
  );
}
