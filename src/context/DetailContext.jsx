"use client";
import React from "react";
import useSWR from "swr";
async function fetcher(url) {
  const res = await fetch(url);
  return res.json();
}

export const DetailContext = React.createContext();
export default function DetailStore({ children }) {
  const [buyModal, setBuyModal] = React.useState({
    modal: false,
    desc: true,
    info: false,
    review: false,
    shadow: false,
    note: false,
    shipping: false,
    coupon: false,
  });
  const [detail, setDetail] = React.useState({
    count: 1,
    size: "L",
  });
  const [state, setState] = React.useState({});

  const closeModal = () => {
    setBuyModal({ ...buyModal, modal: false });
  };
  const HandleBuyModalToggle = () => {
    setBuyModal((prev) => ({
      ...prev,
      modal: !prev.modal,
      shadow: !prev.shadow,
    }));
  };

  const DataFetching = (id, value) => {
    React.useEffect(() => {
      setState(value);
    }, [id, value]);
  };
  const HandleSize = (value) => {
    setDetail({ ...detail, size: value });
  };
  const handleCountPlus = () => {
    setDetail((prev) => ({
      ...prev,
      count: prev.count + 1,
    }));
  };
  const handleCountMininus = () => {
    if (detail.count > 0) {
      setDetail((prev) => ({
        ...prev,
        count: prev.count - 1,
      }));
    }
  };
  const handleDesc = (value) => {
    setBuyModal((prev) => ({
      ...prev,
      [value]: !prev[value],
    }));
  };
  const childModalToggle = (value) => {
    console.log(value);
    setBuyModal((prev) => ({
      ...prev,
      [value]: !prev[value],
    }));
  };
  const childClose = () => {
    setBuyModal({
      ...state,
      note: false,
      shipping: false,
      coupon: false,
      desc: true,
      modal: true,
    });
  };
  return (
    <DetailContext.Provider
      value={{
        buyModal,
        state,
        detail,
        closeModal,
        HandleBuyModalToggle,
        DataFetching,
        HandleSize,
        handleCountPlus,
        handleCountMininus,
        handleDesc,
        childModalToggle,
        childClose,
      }}
    >
      {children}
    </DetailContext.Provider>
  );
}
