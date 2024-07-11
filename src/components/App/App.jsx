import { useEffect, useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
//import ImageList from "..//ImageList/ImageList";
//import { fetchArticles } from "../../articles-api";
import css from "./App.module.css";

export default function App() {
  const handleSearch = async (newImage) => {
    console.log(newImage);
  };
  return (
    <>
      <SearchForm onSearch={handleSearch} />
    </>
  );
}
