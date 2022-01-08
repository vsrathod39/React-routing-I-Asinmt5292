import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Components/Home/Home";
import PageNotFound from "../Components/PageNotFound/PageNotFound.jsx";
import ProductDetails from "../Components/ProductDetails/ProductDetails";
import Products from "../Components/Products/Products";
import "./RoutesHandler.css";

export default function RoutesHandler() {
  return (
    <div className="RoutesHandler-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={"/products"} element={<Products />} />
        <Route path={"/product/:id"} element={<ProductDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}
