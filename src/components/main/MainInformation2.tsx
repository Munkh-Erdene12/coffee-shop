"use client";
import React from "react";
import MainInformation2_child from "./utils/MainInformation2_child";
export default function MainInformation2() {
  return (
    <div className="main_information_2">
      <MainInformation2_child img="/assets/images/banner_2.jpg" />
      <MainInformation2_child img="/assets/images/information_2.jpg" />
      <MainInformation2_child img="/assets/images/information_3.jpg" />
      <MainInformation2_child img="/assets/images/information_4.jpg" />
      <MainInformation2_child img="/assets/images/information_5.jpg" />
      <MainInformation2_child img="/assets/images/information_6.jpg" />
    </div>
  );
}
