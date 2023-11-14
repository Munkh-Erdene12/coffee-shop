"use client";
import React, { SetStateAction, Dispatch } from "react";
import AdminMainDesign from "@/components/admin/AdminMainDesign";
import PublisherCon from "@/components/publisher/PublisherCon";
import PublisherBtn from "@/components/publisher/PublisherBtn";
import PublisherContainer from "@/components/publisher/PublisherContainer";
import CustomPragraph from "@/components/publisher/utils/CustomPragraph";
import CustomInput from "@/components/utils/CustomInput";
import icons from "@/components/utils/icons";
import { CustomImage } from "@/components/utils/CustomImage";
import Category from "@/components/utils/Category";
import Status from "@/components/publisher/Status";
import PublisherTags from "@/components/publisher/PublisherTags";
import { PublisherContext } from "@/context/PublisherContext";
const Page: React.FC = () => {
  const ctx = React.useContext(PublisherContext);
  const icon = icons();

  return (
    <AdminMainDesign>
      <PublisherContainer>
        <div
          className="text-publisherTextColor1 capitalize text-[20px] leading-normal dark:text-publisherDarkTextColor1"
          id="publisherHeader"
        >
          Coffee shop /{" "}
          <span className="text-publisherTextColor dark:text-publisherDarkTextColor">
            Add Product
          </span>
        </div>
        <div className="mt-10 md:flex md:justify-between" id="publisher-header">
          <div>
            <p className="my-1 text-publisherTextColor font-semibold leading-snug text-[21px] tracking-wide dark:text-publisherDarkTextColor">
              Add New Product
            </p>
            <p className="text-publisherTextColor1 tracking-wide dark:text-publisherDarkTextColor1	">
              Orders placed across your store
            </p>
          </div>
          <div className="w-full h-auto flex flex-wrap mt-3 md:w-2/4 md:justify-end">
            <PublisherBtn
              name="w-24 bg-[#f1f1f2] text-[#a8aaae] hover:bg-[#eaebec] hover:text-[#a8aaae] dark:bg-[#424658] dark:text-[#A7AAAE] dark:hover:text-[#a8aaae] dark:hover:bg-[#4c5061]"
              value="Discard"
            />
            <PublisherBtn
              name="w-28 mx-1.5 bg-[#e9e7fd] text-[#685dd8] hover:bg-[#dddbfb] hover:text-[#7367f0] dark:bg-[#3F3F71] dark:text-[#655CD0] dark:hover:bg-[#3f3f71] dark:hover:text-[#7367f0] transition"
              value="Save Draft"
            />
            <div className="">
              <PublisherBtn
                name="w-36 bg-[#7367f0] shadow-shadow1 text-white hover:bg-[#685dd8] "
                value="Publish product"
                click={ctx.handleSubmit}
              />
            </div>
          </div>
        </div>
        <div
          className="w-full h-auto flex flex-col mt-5 md:flex-row md:justify-between"
          id="publisher-action"
        >
          <div className="w-full md:w-[65%]" id="publisher-left">
            <PublisherCon>
              <p className="text-publisherTextColor dark:text-publisherDarkTextColor text-[17px] font-normal tracking-[1px] capitalize">
                Product information
              </p>
              <CustomInput
                name="proudctTitle"
                pl="Product title"
                Class="w-full"
                formClass="mt-5"
                value="Name"
                change={ctx.handleChangeValue}
              />
              <div className="w-full flex justify-between">
                <CustomInput
                  name="type"
                  pl="type"
                  formClass="w-[47.5%] "
                  Class="w-full"
                  value="Type -> Category*"
                  con={ctx.state.selectedCategory}
                  read={true}
                  change={ctx.handleChangeValue}
                />
                <CustomInput
                  name="barCode"
                  pl="0123-4567"
                  formClass="w-[47.5%] "
                  Class="w-full"
                  value="Bar-Code"
                  change={ctx.handleChangeValue}
                />
              </div>
              <div className="mt-5" id="publisher-description">
                <CustomPragraph value="Description" />
                <div className="w-full h-36 rounded-lg mt-2 border border-solid border-publisherBorder bg-white dark:bg-publisherCon dark:border-publisherDarkBorder">
                  <textarea
                    placeholder="Desctiption...."
                    className=" w-full h-full focus:outline-none p-2 rounded-lg dark:bg-publisherCon"
                    name="description"
                    onChange={ctx.handleChangeValue}
                  ></textarea>
                </div>
              </div>
            </PublisherCon>
            <PublisherCon>
              <div
                className="w-full h-auto mt-5 p-3 rounded-lg"
                id="publisher-card"
              >
                <div className="flex justify-between w-full items-center">
                  <p className="text-[18px] dark:text-publisherDarkTextColor">
                    Media
                  </p>
                  <p className="text-[15px] text-[#7367f0]">
                    Add media from URL
                  </p>
                </div>
                <div className="w-full h-auto my-2 rounded-lg border border-dashed border-[#7367f0] px-5 py-16">
                  <input
                    type="file"
                    multiple
                    className="invisible"
                    ref={ctx.fileInputRef}
                    onChange={ctx.onFileSelect}
                  ></input>
                  {ctx.images.length === 0 ? (
                    <div
                      className="flex justify-center flex-col items-center w-full h-full text-center cursor-pointer"
                      onClick={() => ctx.selectedFiles()}
                    >
                      <div className="h-10 w-10 bg-[#F1F1F2] flex justify-center items-center rounded-lg">
                        <icon.BsUpload className="text-[#5C596C]" />
                      </div>
                      <p className="text-[#6E6B7D] font-medium text-[20px] my-4">
                        Drag and drop your image here
                      </p>
                      <span className="mb-2 text-[26px] text-[#a5a3ae]">
                        or
                      </span>
                      <button
                        className="w-32 h-9 bg-[#EAE8FD] text-[15px] rounded-md text-[#7366F0]"
                        onClick={() => ctx.selectedFiles()}
                      >
                        Browse image
                      </button>
                    </div>
                  ) : (
                    <div
                      className="flex-wrap flex w-full h-auto justify-center md:justify-start "
                      onClick={ctx.selectedFiles}
                    >
                      {ctx.images.length > 0 &&
                        ctx.images.map((el: any, index: any) => (
                          <div
                            key={index}
                            className="w-44 h-60  mx-4 bg-white shadow-publisherShadow rounded-lg my-2 dark:bg-publishDark dark:shadow-publisherDarkShadow"
                          >
                            <div className="w-full h-36 p-4 ">
                              <CustomImage
                                img={el.url}
                                alt=""
                                name="object-cover h-full"
                              />
                            </div>
                            <hr className={`border-[#DBDADE]`} />
                            <div className="text-[#6E6B7D] p-2  dark:text-publisherDarkTextColor">
                              {el.name.substring(0, 15)}....
                              <br />
                              <p className="text-[12px] text-[#A5A3AE] italic mt-1 ">
                                {`${(el.size / (1024 * 1024)).toFixed(2)} MB`}
                              </p>
                            </div>
                            <hr className=" border-[#DBDADE]" />
                            <div
                              className="capitalize text-[14px] flex justify-center items-center mt-1 dark:text-publisherDarkTextColor1 cursor-pointer hover:text-[red]	dark:hover:text-[red] transition"
                              onClick={() => {
                                if (ctx.fileInputRef.current !== null) {
                                  ctx.fileInputRef.current.value = "";
                                  ctx.setImages((prev: any) =>
                                    prev.filter(
                                      (el: any) =>
                                        el.name !== ctx.images[index].name
                                    )
                                  );
                                }
                              }}
                            >
                              remove file
                            </div>
                          </div>
                        ))}
                    </div>
                  )}
                </div>
              </div>
            </PublisherCon>
          </div>
          <div className="w-full md:w-1/3" id="publisher-right">
            <PublisherCon>
              <CustomPragraph value="Organize" />
              <Category>
                <p className="text-[#5d596c] tracking-tight text-[15px] font-light dark:text-publisherDarkTextColor">
                  Category
                </p>
              </Category>
              <Status />
              <PublisherTags />
            </PublisherCon>
            <PublisherCon>
              <CustomPragraph value="Pricing"></CustomPragraph>
              <CustomInput
                name="price"
                pl="Price"
                Class="w-full"
                formClass="mt-5"
                value="Base price"
                change={ctx.handleChangeValue}
              />
              <CustomInput
                name="discountedPrice"
                pl="Discounted price"
                Class="w-full"
                value="Discounted price"
                change={ctx.handleChangeValue}
              />
              <hr className="border-publisherBorder dark:publisherDarkBorder mt-8" />
              <div className="mt-5">
                <CustomPragraph value="In Stock" />
              </div>
            </PublisherCon>
          </div>
        </div>
      </PublisherContainer>
    </AdminMainDesign>
  );
};
export default Page;
