"use client";
import React from "react";
export const MainContext = React.createContext();
export default function MainStore(props) {
  const [state, setState] = React.useState({
    sidebar: "close",
    shadow: false,
    sort: "sort by defualts",
    sortList: "",
    video: false,
    category: "",
    shop: "Shop",
    shopDesc: "Home / Shop",
  });
  const [product, setproduct] = React.useState([]);
  const [pageNumber, setPageNumber] = React.useState(0);
  const [buyModal, setModal] = React.useState({
    note: false,
    shipping: false,
    coupon: false,
  });
  const showSidebar = () => {
    setState({ ...state, sidebar: "open" });
  };
  const closeSideBar = () => {
    setState({ ...state, sidebar: "close" });
  };
  const textContent = (e) => {
    setState({ ...state, sort: e.target.textContent });
  };
  const handlePageClick = ({ selected }) => {
    setPageNumber(selected);
  };
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
  const handleClickChangeCategory = (value) => {
    setState({ ...state, category: value });
  };
  const handleClickShopChange = (value) => {
    setState({ ...state, shop: value, shopDesc: `Home / Shop / ${value}` });
  };
  const dataFetch = (value) => {
    setproduct(value);
  };
  return (
    <MainContext.Provider
      value={{
        state,
        pageNumber,
        buyModal,
        product,
        setPageNumber,
        showSidebar,
        closeSideBar,
        textContent,
        handlePageClick,
        HandleChlickVideo,
        shadowToggle,
        handleClickChangeCategory,
        handleClickShopChange,
        dataFetch,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
}
