"use client";
import React from "react";
import Skeleton from "react-loading-skeleton";
export default function CoffeLoading({
  count,
  name,
}: {
  count: number;
  name: string;
}) {
  return Array(count)
    .fill(0)
    .map((el, index) => (
      <div className={`${name}`} key={index}>
        <div className="w-[28%] px-3">
          <Skeleton circle={true} height={45} width={45} />
        </div>
        <div className="w-[75%]">
          <Skeleton count={4} style={{ margin: "5px 0" }} />
        </div>
      </div>
    ));
}
