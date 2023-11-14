"use client";
import React from "react";
import AdminMainDesign from "@/components/admin/AdminMainDesign";
import PublisherContainer from "@/components/publisher/PublisherContainer";
import Order from "@/components/publisher/Order";

export default function Page() {
  const arr = Array.from({ length: 7 }, (_, index) => index);

  return (
    <AdminMainDesign>
      <PublisherContainer>
        <div className="my-10 flex flex-wrap">
          {arr.map((value, index) => (
            <Order key={index} />
          ))}
        </div>
      </PublisherContainer>
    </AdminMainDesign>
  );
}
