"use client";
import React from "react";
export const PublisherContext = React.createContext();
export default function PublisherStore(props) {
  const [state, setState] = React.useState({
    price: "",
    discountedPrice: "",
    productTitle: "",
    barCode: "",
    description: "",
    dark: "dark",
    selectedStatus: "published",
    selectedCategory: "american-food",
    categoryId: "65474e4338d43a95c96f8005",
    url: "",
    buffer: null,
  });
  const [images, setImages] = React.useState([]);
  const fileInputRef = React.useRef(null);

  const handleWriteChange = (value) => {
    setWrite((prev) => {
      return { ...prev, [value]: !prev[value] };
    });
  };
  const handleSwitchTheme = () => {
    setState((prev) => {
      return {
        ...prev,
        dark: prev.dark === "dark" ? "light" : "dark",
      };
    });
  };
  const handleChangeValue = (params) => {
    setState((prev) => {
      return { ...prev, [params.target.name]: params.target.value };
    });
  };
  const selectedFiles = () => {
    fileInputRef.current.click();
  };
  const onFileSelect = async (event) => {
    const files = event.target.files;
    if (files.length === 0) return;

    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      if (file.type.split("/")[0] !== "image") {
        console.log(`${file.name} файл зураг биш байна.`);
        continue;
      }

      try {
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        setState((prev) => {
          return {
            ...prev,
            buffer: buffer,
          };
        });
        setImages((prev) => [
          ...prev,
          {
            name: file.name,
            url: URL.createObjectURL(file),
            size: file.size,
          },
        ]);
      } catch (error) {
        console.error(
          `${file.name} файлыг сервер рүү илгээхэд алдаа гарлаа:`,
          error
        );
      }
    }
  };

  const handleSelectChange = (event) => {
    setState((prev) => {
      return {
        ...prev,
        selectedStatus: event.target.value,
      };
    });
  };

  const handleChangeCategory = (e) => {
    const selectedCategoryText = e.target.options[e.target.selectedIndex].text;
    setState((prev) => {
      return {
        ...prev,
        selectedCategory: selectedCategoryText,
        categoryId: e.target.value,
        url: `/assets/image/${selectedCategoryText}`,
      };
    });
  };
  const handleSubmit = async () => {
    const formData = new FormData();
    formData.set("name", state.productTitle);
    formData.set("price", state.price);
    formData.set("discountedPrice", state.discountedPrice);
    if (state.buffer) {
      formData.append("img", new Blob([state.buffer]));
    }
    formData.set("categoryId", state.categoryId);
    formData.set("categoryId", state.categoryId);
    formData.set("type", state.selectedCategory);
    formData.set("selectedStatus", state.selectedStatus);
    formData.set("barCode", state.barCode);
    try {
      const response = await fetch("/api/auth/publisher/product", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      console.log("Амжилттай илгээгдлээ");
    } catch (error) {
      console.error("Алдаа гарлаа:", error);
    }
  };
  return (
    <PublisherContext.Provider
      value={{
        state,
        fileInputRef,
        images,
        setImages,
        handleWriteChange,
        handleSwitchTheme,
        handleChangeValue,
        selectedFiles,
        onFileSelect,
        handleSelectChange,
        handleChangeCategory,
        handleSubmit,
      }}
    >
      {props.children}
    </PublisherContext.Provider>
  );
}
