"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Logo from "../utils/Logo";
import icons from "../utils/icons";
import { OtherBtn } from "../utils/CustomBtn";
import NavItem from "./NavItem";
import { FinanceContext } from "@/context/FinanceContext";
import SideBar from "./SideBar";

export default function MainHeader(props) {
  const ctx = React.useContext(FinanceContext);
  const router = useRouter();
  const icon = icons();
  const [sticky, setSticky] = React.useState("");
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setSticky("sticky");
      } else {
        setSticky("");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className={`head-container ${sticky}`}>
        <div className="head_lm">
          {/* {props.wh ? (
            <Logo img="/assets/img/logo-white.svg" />
          ) : sticky === "" ? (
            <div>kkk</div>
          ) : (
            <Logo img="/assets/img/logo.svg" />
          )} */}

          <div className="action-lw">
            <NavItem />
            <div className="kart">
              <OtherBtn value="Book A Table" />
              <p>Cart ({ctx.state.wishlist})</p>
            </div>
            <div className="bar">
              <icon.FaBarsStaggered />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
