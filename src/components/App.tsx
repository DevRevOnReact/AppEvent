import * as React from "react";
import "./../assets/scss/App.scss";
import { Header } from "./Header/Header";
import { Routes, Route } from "react-router";
import Cart from "./Cart/Cart";
import { Catalog } from "./Catalog/Catalog";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const App = () => {
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);
  return (
    <div className={isDarkMode ? "dark-theme" : "light-theme"}>
      <Header />
      <Routes>
        <Route path="/" element={<Catalog />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
