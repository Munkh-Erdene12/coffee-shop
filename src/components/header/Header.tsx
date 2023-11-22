"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { SlideTitle } from "./SlideTitle";
import { CustomImage } from "../utils/CustomImage";
import { CustomBtn } from "../utils/CustomBtn";
import icons from "../utils/icons";
import SideBar from "./SideBar";
import Logo from "../utils/Logo";
import NavItem from "./NavItem";
import Page from "./Page";
import { MainContext } from "@/context/MainContext";
import { useSlideData } from "@/app/utils/Api";
import { HeaderAction } from "./HeadderAction";
import ArrowBtn from "./ArrowBtn";

interface Slide {
  id: string;
  title: string;
  buttonText: string;
  subtitle: string;
  image: string;
}
export default function Header() {
  const path = usePathname();
  const ctx = React.useContext(MainContext);
  const icon = icons();
  const { data, isLoading } = useSlideData();
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [slide, setSlide] = React.useState<Slide[]>([]);
  React.useEffect(() => {
    if (data) {
      setSlide(data.data);
    }
  }, [data]);
  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slide.length - 1 ? 0 : prevSlide + 1
    );
  };
  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slide.length - 1 : prevSlide - 1
    );
  };
  return (
    <div className="header">
      <div
        className={`nav_sm ${ctx.state.sidebar === "open" ? "open" : "close"}`}
      >
        <SideBar close={ctx.closeSideBar} />
      </div>
      <div className="navigation">
        <nav className="wfull">
          <ul className="nav">
            <NavItem />
          </ul>
          <Logo img="/assets/logo/logo.svg" name="wfull" />
          <div className="action">
            <div className="btn">
              <CustomBtn value="Book table" href="/pages/book-table" />
            </div>
            <div>
              <HeaderAction value="Search" />
              <HeaderAction value="Cart" count="0" />
            </div>
            <icon.FaBarsStaggered
              className="bar"
              onClick={() => ctx.showSidebar()}
            />
          </div>
        </nav>
      </div>
      <div className="carousel wfull">
        <div className="carousel-slide wfull">
          {isLoading ? (
            <SkeletonTheme baseColor="#f2f2f2" highlightColor="#cccccc">
              <Skeleton className="w-full h-full" count={6}></Skeleton>
            </SkeletonTheme>
          ) : (
            slide.map((el, index) => (
              <div
                className={`slide wfull  ${
                  currentSlide === index ? "active" : ""
                }`}
                key={el.id}
              >
                {index === 0 ? (
                  <div
                    className={`slide_0 ${
                      currentSlide === index ? "active" : ""
                    }`}
                  >
                    <SlideTitle title={el.title} />
                  </div>
                ) : index === 1 ? (
                  <div
                    className={`slide_1 ${
                      currentSlide === index ? "active" : ""
                    }`}
                  >
                    <SlideTitle
                      title={el.title}
                      mod="title_mod_1"
                      buttonText={el.buttonText}
                    />
                  </div>
                ) : (
                  <div
                    className={`slide_2 ${
                      currentSlide === index ? "active" : ""
                    }`}
                  >
                    <SlideTitle
                      title={el.title}
                      mod="title_mod"
                      subtitle={el.subtitle}
                      buttonText={el.buttonText}
                      sm="active"
                      sml="active"
                    />
                  </div>
                )}
                <CustomImage
                  img={`/assets/image/slides/${el.image}`}
                  alt={`slide_${index}`}
                  name="img_w-full"
                />
              </div>
            ))
          )}
          <div className="arrowBtn">
            <ArrowBtn />
            <ArrowBtn click={handleNextSlide} />
          </div>
        </div>
        <div className="page">
          <Page
            currentSlide={currentSlide}
            setCurrentSlide={setCurrentSlide}
            slide={slide}
          />
        </div>
      </div>
    </div>
  );
}
