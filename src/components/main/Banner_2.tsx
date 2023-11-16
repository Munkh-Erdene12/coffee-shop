"use client";
import React from "react";
import { CustomImage } from "../utils/CustomImage";
import Shadow from "../utils/Shadow";
import icons from "../utils/icons";
export default function Banner_2() {
  const icon = icons();
  const [state, setState] = React.useState({
    shadow: false,
    video: false,
  });
  const shadowToggle = () => {
    setState((prev) => ({
      ...state,
      shadow: !prev.shadow,
    }));
  };
  const HandleChlickVideo = () => {
    setState((prev) => ({
      ...prev,
      video: !prev.video,
    }));
  };
  return (
    <>
      <div className="banner_1 md:h-[150px] mt-6 w-full h-28">
        <CustomImage
          img="/assets/images/banner_1.jpg"
          alt="banner"
          name="w-full h-full object-fill"
        ></CustomImage>
      </div>
      {state.shadow && (
        <Shadow
          click={() => {
            shadowToggle();
            HandleChlickVideo();
          }}
        />
      )}
      {state.video && (
        <div className="media fixed top-[50%] left-[50%] z-[999] w-full h-52 translate lg:w-4/5  lg:top-[20%] mt-5">
          <div className="media_close w-full h-12 absolute bottom-[-60px] flex justify-center lg:right-[-30px] lg:top-[-30px] lg:justify-end">
            <div
              className="close w-[50px] h-[50px] bg-color1 rounded-full flex justify-center items-center cursor-pointer lg:hover:bg-color3"
              onClick={() => {
                shadowToggle();
                HandleChlickVideo();
              }}
            >
              <icon.AiOutlineClose className="text-white " />
            </div>
          </div>
          <video
            autoPlay={state.video}
            controls
            muted
            className="w-full h-auto"
          >
            <source src="/assets/video/info.mp4" />
          </video>
        </div>
      )}
      <div className="banner_2 relative w-full h-52  md:h-[300px] lg:h-[550px]">
        <div className="media.l absolute w-full h-full flex justify-center items-center ">
          <div
            className="media-child h-20 w-20 rounded-full border-[3px] border-solid border-white flex justify-center items-center cursor-pointer"
            onClick={() => {
              shadowToggle();
              HandleChlickVideo();
            }}
          >
            <icon.TiMediaPlayOutline className="h-12 w-12 text-white" />
          </div>
        </div>
        <CustomImage
          img="/assets/images/banner_2.jpg"
          alt="banner_2"
          name="w-full h-full object-cover bg-dark"
        />
      </div>
    </>
  );
}
