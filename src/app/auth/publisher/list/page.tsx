"use client";
import React from "react";
import ReactPaginate from "react-paginate";
import AdminMainDesign from "@/components/admin/AdminMainDesign";
import PublisherContainer from "@/components/publisher/PublisherContainer";
import ProductAddTitle from "@/components/product/ProductAddTitle";
import ListInformation from "@/components/list/ListInformation";
import { useAllProductsData } from "@/app/utils/Api";
import ListAllProduct from "@/components/list/ListAllProduct";
import ListAllProductAction from "@/components/list/ListAllProductAction";
import CustomHooks from "@/hooks/ProductListHooks";
import CustomHooksPaginate from "@/hooks/CustomHooksPaginate";
import { PublisherContext } from "@/context/PublisherContext";
import icons from "@/components/utils/icons";
import ListModal from "@/components/list/ListModal";
export default function Page() {
  const { data, isLoading } = useAllProductsData();
  const products = CustomHooks({ data });
  const icon = icons();
  const ctx = React.useContext(PublisherContext);
  const { itemsPerPage, pagesVisited, changePage } = CustomHooksPaginate();
  const displayProducts = Array.isArray(products)
    ? products
        .slice(pagesVisited, pagesVisited + itemsPerPage)

        .map((el) => el)
    : [];
  const pageCount = Array.isArray(products)
    ? Math.ceil(products.length / itemsPerPage)
    : 0;

  return (
    <>
      <AdminMainDesign>
        <PublisherContainer>
          <ProductAddTitle value="Product list"></ProductAddTitle>
          <ListInformation>
            <div className="w-full h-auto flex flex-col md:flex-row">
              {isLoading ? (
                <></>
              ) : (
                <div className="w-full  flex-col flex md:flex-row">
                  <ListAllProduct el={displayProducts}></ListAllProduct>
                  <ListAllProductAction
                    el={displayProducts}
                  ></ListAllProductAction>
                </div>
              )}
            </div>

            {isLoading ? (
              <></>
            ) : (
              data?.message != "No product found" && (
                <div className="flex w-full mt-6">
                  <ReactPaginate
                    previousLabel="previous"
                    nextLabel={<icon.MdKeyboardArrowRight />}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={
                      "pagination flex w-full justify-between"
                    }
                    previousLinkClassName={
                      "pagination__link w-full h-full flex justify-center text-publisherTextColor1 items-center   dark:text-publisherDarkTextColor1 text-[12px]"
                    }
                    previousClassName="w-16 h-9 rounded-md bg-[#F1F1F2] hover:bg-[#e6e6e6] transition"
                    nextLinkClassName={
                      "pagination__link flex justify-center items-center h-full w-full"
                    }
                    nextClassName="w-7 h-full bg-[#F1F1F2 hover:bg-[#e6e6e6] transition rounded-md"
                    disabledClassName={"pagination__link--disabled "}
                    activeClassName={
                      "pagination__link--active w-7 h-full bg-[#7366F0] rounded-md z-1 "
                    }
                    activeLinkClassName="bg-[#7366F0] text-white hover:bg-[#695dda]"
                    pageLinkClassName=" w-7 h-full bg-[#F1F1F2] hover:bg-[#e6e6e6] transition flex justify-center items-center rounded-md"
                  ></ReactPaginate>
                </div>
              )
            )}
          </ListInformation>
        </PublisherContainer>
      </AdminMainDesign>
      {ctx.modal && <ListModal></ListModal>}
    </>
  );
}
