import React from "react";
import PublisherStore from "@/context/PublisherContext";
import "@/sass/style.scss";
export const metadata = {
  title: "Admin Panel",
};

export default function PublisherLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div data-mode="light" id="publisher">
      <PublisherStore>{children}</PublisherStore>
    </div>
  );
}
