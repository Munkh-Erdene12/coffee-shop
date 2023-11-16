"use client";
import React from "react";
import { CustomImage } from "../../utils/CustomImage";
import { useProductMain } from "@/app/utils/Api";
import CoffeLoading from "../../utils/Loading";
import "react-loading-skeleton/dist/skeleton.css";
interface Coffee {
  id: string;
  img: string;
  name: string;
  description: string;
  price: string;
  url: string;
}
export default function MainCoffee() {
  const { data, isLoading } = useProductMain();
  const [coffee, setCoffee] = React.useState<Coffee[]>([]);
  React.useEffect(() => {
    if (data) {
      setCoffee(data.data);
    }
  }, [data]);
  return (
    <div className="coffees ">
      {isLoading ? (
        <CoffeLoading count={6} name="coffe_vm flex justify-between" />
      ) : (
        coffee.map((el) => (
          <div
            className="coffe_vm rounded-[20px]  relative py-5 pr-[10px] pl-[60px] shadow-shadow2"
            key={el.id}
          >
            <div className="img_coffee ">
              <CustomImage
                img={`${el.url}${el.img}`}
                alt={`img_${el.id}`}
                name="w-full h-full"
              />
            </div>
            <p className="title text-[22px] text-color1 font-dunbarbook">
              {el.name}
            </p>
            <small className="text-color2 font-Light">{el.description}</small>
            <p className="price font-dunbarbook text-color_1_hover text-[15px] mt-2">
              ₮{el.price}
            </p>
          </div>
        ))
      )}
    </div>
  );
}
