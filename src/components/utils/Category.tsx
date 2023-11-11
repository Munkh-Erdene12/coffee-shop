"use client";
import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useCategoryData } from "@/app/utils/Api";
import CustomSelect from "./CustomSelect";
interface Category {
  id: number;
  name: string;
  product: any[];
}
type props = {
  children?: React.ReactNode;
};
export default function Category(props: props) {
  const { data, isLoading, isError } = useCategoryData();
  const [category, setCategory] = React.useState<Category[]>([]);
  React.useEffect(() => {
    if (data) {
      setCategory(data.data);
    }
  }, [data]);
  return (
    <div className="mt-6">
      {props.children}
      {isLoading ? (
        <Skeleton height={30} />
      ) : (
        <CustomSelect>
          {category.map((el) => (
            <option key={el.id} value={el.name} className="capitalize">
              {el.name}
            </option>
          ))}
        </CustomSelect>
      )}
    </div>
  );
}
