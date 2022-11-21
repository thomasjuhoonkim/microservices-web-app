import React from "react";
import { Routes, Route } from "react-router-dom";

import Main from "./main/Main";
import { Products, ProductsCreate, ProductsEdit } from "./admin/components";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/admin/products" element={<Products />} />
      <Route path="/admin/products/create" element={<ProductsCreate />} />
      <Route path="/admin/products/:id/edit" element={<ProductsEdit />} />
    </Routes>
  );
}

export default App;
