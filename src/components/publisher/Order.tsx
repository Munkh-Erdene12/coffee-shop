"use client";
import React from "react";

export default function Order() {
  return (
    <div className="card w-80 h-auto shadow-publisherShadow dark:shadow-publisherDarkShadow p-5 rounded-md m-2 ">
      <div className="card-body">
        <h5 className="card-title my-1 text-publisherTextColor text-[18px] dark:text-publisherDarkTextColor">
          Захилга
        </h5>
        <h6 className="card-subtitle mb-2 text-body-secondary text-publisherTextColor1 dark:text-publisherDarkTextColor1 ">
          Ширээ 1
        </h6>
        <li>Espresso</li>
        <li>Jambalaya</li>
        <li>Roasted Chicken Cobb Salad</li>
        <p className="my-[2px] text-[#34495e] dark:text-[white]">
          Нийт үнэ: ₮{11500 + 13500 + 8000}
        </p>
        <div className="flex items-center justify-between">
          <a className="cursor-pointer dark:hover:text-[#2ecc71] dark:text-[green] text-[green] text:hover[#2ecc71] transition">
            Бэлэн болсон
          </a>
          <a className="card-link cursor-pointer text-[#c0392b] hover:text-[red] transition">
            Устгах
          </a>
        </div>
      </div>
    </div>
  );
}
