"use client";
import React from "react";

type PageProps = {
  currentSlide: number;
  setCurrentSlide: (slide: number) => void;
  slide: { id: string }[];
};

export default function Page(props: PageProps) {
  return (
    <div className="page">
      {props.slide.map((el, index) => (
        <div
          className={`pagenation ${
            props.currentSlide === index ? "active" : ""
          }`}
          key={el.id}
          onClick={() => props.setCurrentSlide(index)}
        >
          {index + 1}
        </div>
      ))}
    </div>
  );
}
