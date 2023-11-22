"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import CoffeLoading from "@/components/utils/Loading";
import axios from "axios";
import icons from "@/components/utils/icons";
import { CustomImage } from "@/components/utils/CustomImage";
import MainHeader from "@/components/header/MainHeader";
import { FinanceContext } from "@/context/FinanceContext";
import DetailHeader from "@/components/detail/DetailHeader";
import { detailDesc } from "@/app/utils/CompanyLink";
import ReviewInput from "@/components/detail/ReviewInput";
import { ReviewTitle, BuyModal } from "@/components/detail/ReviewInput";
import OtherModal from "@/components/detail/OtherModal";
import Shadow from "@/components/utils/Shadow";
import {
  OtherModalTitle,
  OtherModalValue,
  OtherModalValue1,
} from "@/components/detail/OtherModal";
import { DetailContext } from "@/context/DetailContext";
import { MainContext } from "@/context/MainContext";
export default function Page() {
  const ctx = React.useContext(DetailContext);
  const ctx1 = React.useContext(MainContext);
  const params = useSearchParams();

  const data = ctx.DataFetching(params.get("id"), ctx1.product);
  const icon = icons();
  // const handleDesc = (value: keyof typeof other) => {
  //   console.log("handleDesc called with value:", value);

  //   setOther((prev) => ({
  //     ...prev,
  //     [value]: !prev[value],
  //   }));
  // };
  let clas = "overflow-auto max-h-max";
  let oth = "overflow-hidden max-h-0";
  return (
    <>
      <>
        <section className="detail h-auto relative transition">
          <MainHeader />
          <div className="container">
            <div className="main-detail">
              <div className="left">
                {/* <CustomImage
                  img={`${ctx.state.url}${ctx.state.img}`}
                  alt={`detail ${params.get("id")}`}
                /> */}
              </div>
              <div className="right">
                <div className="static-url">
                  Home / Shop / {ctx.state.name !== null && ctx.state.name}
                </div>
                <div className="title-detail">
                  {ctx.state.name !== null && ctx.state.name}
                  <p className="price-detail">
                    ₮{ctx.state.price !== null && ctx.state.price}
                  </p>
                </div>
                <div className="description">
                  {ctx.state.description !== null && ctx.state.description}
                </div>
                <div className="size ">
                  <p>size:</p>
                  <div className="sizelm">
                    <div
                      className={
                        ctx.detail.size === "L"
                          ? "child_size active"
                          : "child_size"
                      }
                      onClick={() => ctx.HandleSize("L")}
                    >
                      L
                    </div>
                    <div
                      className={
                        ctx.detail.size === "M"
                          ? "child_size active"
                          : "child_size"
                      }
                      onClick={() => ctx.HandleSize("M")}
                    >
                      M
                    </div>
                    <div
                      className={
                        ctx.detail.size === "X"
                          ? "child_size active"
                          : "child_size"
                      }
                      onClick={() => ctx.HandleSize("X")}
                    >
                      X
                    </div>
                  </div>
                </div>
                <div className="count-buy">
                  <div className="count">
                    <div className="count_child">
                      <button onClick={() => ctx.handleCountMininus()}>
                        -
                      </button>
                      {ctx.detail.count}
                      <button onClick={() => ctx.handleCountPlus()}>+</button>
                    </div>
                  </div>
                  <div
                    className="buy"
                    onClick={() => ctx.HandleBuyModalToggle()}
                  >
                    Add To Cart
                  </div>
                </div>
                <div className="wish-lms">
                  <div className="wishlist flex items-center">
                    <icon.AiOutlineHeart /> Add To Wishlist
                  </div>
                  <div className="compore flex items-center ">
                    <icon.FaCompressAlt />
                    Add To Compore
                  </div>
                </div>
                <div className="tag-k">
                  <p>
                    SKU <span>REAF.LA-1188</span>
                  </p>
                  <p className="category-lm">
                    category:
                    <span>{ctx.state.type !== null && ctx.state.type}</span>
                  </p>
                  <p className="cagtegory-tag">
                    tag:{" "}
                    <span>{ctx.state.type !== null && ctx.state.type}</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full  justify-between">
              <DetailHeader
                value="Description"
                click={() => ctx.handleDesc("desc")}
                name={ctx.buyModal.desc}
              >
                <div
                  className={`w-full h-auto flex flex-col ${
                    ctx.buyModal.desc ? clas : oth
                  } md:overflow-auto md:max-h-max md:flex-row md:my-10`}
                >
                  <div>
                    {detailDesc.map((el, index) => (
                      <React.Suspense fallback={<div>loading</div>} key={index}>
                        <h3 className="text-[22px] font-LeMonde text-color1 hover:text-color_1_hover transition my-2">
                          {el.title}
                        </h3>
                        <p className="text-color2 font-dunbarbook leading-7">
                          {el.value}
                        </p>
                        <p className="text-color2 font-dunbarbook leading-7 mb-5">
                          {el.value1}
                        </p>
                      </React.Suspense>
                    ))}
                  </div>
                  <div className="w-full h-56 md:h-72 ml-2">
                    <CustomImage
                      img="/assets/images/desc.jpeg"
                      alt="desc"
                      name="w-full h-full object-cover"
                    ></CustomImage>
                  </div>
                </div>
              </DetailHeader>
              <DetailHeader
                value="additional information"
                click={() => ctx.handleDesc("info")}
                name={ctx.buyModal.info}
              >
                <div className={`${ctx.buyModal.info ? clas : oth}`}>
                  <div
                    className={`w-full h-11 border border-solid border-[#D9D9D9]  my-5 flex  `}
                  >
                    <div className="w-2/5 h-full border-r border-r-solid border-r-[#D9D9D9] justify-start items-center flex px-3 font-dunbarbook text-color1">
                      <p>Size</p>
                    </div>
                    <div className="w-3/5 h-full justify-start items-center flex px-3 font-LeMonde text-color2">
                      L, M, X
                    </div>
                  </div>
                </div>
              </DetailHeader>
              <DetailHeader
                value="reviews"
                click={() => ctx.handleDesc("review")}
                name={ctx.buyModal.review}
              >
                <div className={`${ctx.buyModal.review ? clas : oth}`}>
                  <h3 className="text-[22px] font-LeMonde my-8">Reviews</h3>
                  <p className="text-[16px] font-dunbarbook text-color2 mb-5">
                    There are no reviews yet
                  </p>
                  <div className="text-[20px] text-color1 font-dunbarbook mb-4">
                    Be the first to review {ctx.state.name}
                  </div>
                  <span className="text-[16px] italic text-color2 font-Light ">
                    Your email address will not be published. Required fields
                    are marked *
                  </span>
                  <div className="flex items-center">
                    <p className="my-4 capitalize font-dunbarbook text-color2">
                      your rating*
                    </p>
                    <div className="flex ml-5 cursor-pointer">
                      {Array(5)
                        .fill(5)
                        .map((el, index) => (
                          <icon.IoStarOutline
                            key={index}
                            className={`mx-1 text-[#f5a626]`}
                          />
                        ))}
                    </div>
                  </div>
                  <div className="">
                    <ReviewTitle name="Your review *"></ReviewTitle>
                    <ReviewInput name="h-28"></ReviewInput>
                    <div className="md:flex justify-between w-3/5">
                      <div className="md:w-3/6 md:mr-2">
                        <ReviewTitle name="Name *"></ReviewTitle>
                        <ReviewInput name="h-9"></ReviewInput>
                      </div>
                      <div className="md:w-3/6 md:ml-2">
                        <ReviewTitle name="Email *"></ReviewTitle>
                        <ReviewInput name="h-9"></ReviewInput>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <input type="checkbox" className="mr-4 w-4 h-4" />
                      <p className="text-[16px]  text-color2 font-dunbarbook  mb-4">
                        Save my name, email, and website in this browser for the
                        next time I comment. *
                      </p>
                    </div>
                    <button className="h-12 w-36 border border-[#d9d9d9] text-color1 font-leMonde text-[18px] hover:bg-color1 hover:text-white transition">
                      Submit
                    </button>
                  </div>
                </div>
              </DetailHeader>
            </div>
          </div>
          {ctx.buyModal.modal && (
            <>
              <Shadow></Shadow> <BuyModal></BuyModal>
            </>
          )}
          {ctx.buyModal.note && (
            <OtherModal>
              <OtherModalTitle value="Add Note for Seller" />
              <textarea
                className="w-full h-[150px] border boder-solid border-[#d9d9d9] my-3 font-dunbarbook p-3"
                placeholder="Notes about your order, e.g. special notes for delivery."
              />
              <button className="w-full h-11 bg-color1 text-white font-dunbarbook hover:bg-color3 transition">
                Save
              </button>
              <button className="w-full h-11 text-color1 hover:text-color3 transition font-dunbarbook">
                Cancel
              </button>
            </OtherModal>
          )}
          {ctx.buyModal.shipping && (
            <OtherModal>
              <OtherModalTitle value="Estimate shipping rates"></OtherModalTitle>
              <select className="font-dunbarbook bordervm">
                <option value="Baynzurh">Baynzurh</option>
                <option value="Baynzurh">Han-uul</option>
                <option value="Baynzurh">Chingeltei</option>
                <option value="Baynzurh">Bayngol</option>
                <option value="Baynzurh">Suhbaatar</option>
              </select>
              <input
                type="text"
                className="bordervm font-dunbarbook"
                placeholder="Address"
              />
              <input
                type="text"
                className="bordervm font-dunbarbook"
                placeholder="Number"
              />
              <input
                type="text"
                className="bordervm font-dunbarbook"
                style={{ marginBottom: "20px" }}
                placeholder="Postcode / ZIP"
              />
              <OtherModalValue value="Save"></OtherModalValue>
              <OtherModalValue1></OtherModalValue1>
            </OtherModal>
          )}
          {ctx.buyModal.coupon && (
            <OtherModal>
              <OtherModalTitle value="Select or input Coupon" />
              <p className="font-dunbarbook text-color2">
                If you have a coupon code, please apply it below.
              </p>
              <input
                type="text"
                className="bordervm font-dunbarbook"
                placeholder="Coupon code"
                style={{ marginBottom: "20px" }}
              />
              <OtherModalValue value="Save"></OtherModalValue>
              <OtherModalValue1></OtherModalValue1>
            </OtherModal>
          )}
        </section>
      </>
    </>
  );
}
