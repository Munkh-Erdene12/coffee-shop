"use client";
import React from "react";
import Information from "@/components/main/Information";
import Banner_2 from "@/components/main/Banner_2";
import MainCoffe from "@/components/main/MainCoffe";
import MainCoffee2 from "@/components/main/MainCoffee2";
import Banner3 from "@/components/main/Banner3";
import MainCoffe3 from "@/components/main/MainCoffe3";
import MainInformation2 from "@/components/main/MainInformation2";
import Header from "@/components/header/Header";
export default function Page() {
  return (
    <React.Fragment>
      <Header></Header>
      <Information></Information>
      <Banner_2></Banner_2>
      <MainCoffe></MainCoffe>
      <MainCoffee2></MainCoffee2>
      <Banner3></Banner3>
      <MainCoffe3></MainCoffe3>
      <MainInformation2></MainInformation2>
    </React.Fragment>
  );
}
