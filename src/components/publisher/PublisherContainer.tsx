import React from "react";

export default function PublisherContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div id="publisher_main" className="h-[88vh] overflow-auto">
      <div className="w-full h-auto mt-5 overflow-y-scroll px-2 dark:bg-publishDark bg-publisher">
        {children}
      </div>
    </div>
  );
}
