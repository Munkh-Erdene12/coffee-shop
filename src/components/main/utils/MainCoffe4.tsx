"use client";
import React from "react";
import { useRouter, useParams } from "next/navigation";
import { useCoffeData } from "@/app/utils/Api";
import { CustomImage } from "@/components/utils/CustomImage";
import Size from "./Size";
import CoffeLoading from "@/components/utils/Loading";
import { MainContext } from "@/context/MainContext";
interface Product {
  id: string;
  img: string;
  name: string;
  price: string;
  url: string;
}
export default function MainCoffe4() {
  const path = useRouter();
  const { data, isLoading } = useCoffeData();
  const ctx = React.useContext(MainContext);
  const [product, setProduct] = React.useState<Product[]>([]);
  React.useEffect(() => {
    if (data) {
      setProduct(data.data);
    }
  }, [data]);
  return (
    <div className="w-full main_banner_4 ">
      {isLoading ? (
        <CoffeLoading
          name="main coffe-4 justify-center flex  my-8"
          count={8}
        ></CoffeLoading>
      ) : (
        product.map((el) => (
          <div
            key={el.id}
            className={`main_coffe_4 flex justify-center items-center flex-col`}
            onClick={() => {
              path.push(`/detail?id=${el.id}`);
              ctx.dataFetch(el);
            }}
          >
            <div className="img_4 w-full h-[350px] cursor-pointer rounded-full relative">
              <CustomImage
                img={`${el.url}${el.img}`}
                alt="img_4"
                name="img_w-full"
              />
              <div className="sizes absolute bottom-[-10px] flex justify-center items-center w-full h-8">
                <Size value="L" />
                <Size value="M" />
                <Size value="X" />
              </div>
            </div>
            <div className="content flex flex-col font-dunbarbook text-[25px] text-color1 py-5 text-center">
              {el.name}
              <span className="my-6 font-dunbarbook text-[16px] text-color_1_hover">
                ₮{el.price}
              </span>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
