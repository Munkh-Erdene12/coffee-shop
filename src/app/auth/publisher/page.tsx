"use client";
import React from "react";
import AdminMainDesign from "@/components/admin/AdminMainDesign";
import PublisherContainer from "@/components/publisher/PublisherContainer";
import ProductAddTitle from "@/components/product/ProductAddTitle";
import ProductAddLeft from "@/components/product/ProductAddLeft";
import ProductAddRight from "@/components/product/ProductRight";
import ProudctContainer from "@/components/product/ProudctContainer";
const Page: React.FC = () => {
  return (
    <AdminMainDesign>
      <PublisherContainer>
        <ProductAddTitle value="product add"></ProductAddTitle>
        <ProudctContainer>
          <ProductAddLeft></ProductAddLeft>
          <ProductAddRight></ProductAddRight>
        </ProudctContainer>
      </PublisherContainer>
    </AdminMainDesign>
  );
};
export default Page;
