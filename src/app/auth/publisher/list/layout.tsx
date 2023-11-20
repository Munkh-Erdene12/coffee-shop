import React from "react";
import PublisherStore from "@/context/PublisherContext";
export const metadata = {
  title: "Product List",
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
