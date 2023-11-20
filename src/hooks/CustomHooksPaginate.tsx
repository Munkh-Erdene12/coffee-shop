"use client";
import React from "react";
import { PublisherContext } from "@/context/PublisherContext";
const CustomHooksPaginate = () => {
  const ctx = React.useContext(PublisherContext);
  const [pageNumber, setPageNumber] = React.useState(0);
  const itemsPerPage: number = ctx.list;
  const pagesVisited = pageNumber * itemsPerPage;

  const changePage = ({ selected }: { selected: number }) => {
    setPageNumber(selected);
  };
  return { itemsPerPage, pagesVisited, changePage };
};

export default CustomHooksPaginate;
