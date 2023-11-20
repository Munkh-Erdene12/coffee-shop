"use client";
import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useCategoryData } from "@/app/utils/Api";
import CustomSelect from "./CustomSelect";
import { PublisherContext } from "@/context/PublisherContext";

interface Category {
  id: number;
  name: string;
  product: any[];
}
type props = {
  children?: React.ReactNode;
  name?: string;
};
export default function Category(props: props) {
  const { data, isLoading, isError } = useCategoryData();
  const [category, setCategory] = React.useState<Category[]>([]);

  const ctx = React.useContext(PublisherContext);

  React.useEffect(() => {
    if (data) {
      setCategory(data.data);
    }
  }, [data]);

  return (
    <div className={`${props.name ? props.name : "mt-6"}`}>
      {props.children}
      {isLoading ? (
        <Skeleton height={30} />
      ) : (
        <CustomSelect change={(e) => ctx.handleChangeCategory(e)}>
          {category.map((el) => (
            <option key={el.id} value={el.id} className="capitalize">
              {el.name}
            </option>
          ))}
        </CustomSelect>
      )}
    </div>
  );
}
