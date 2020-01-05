import React from "react";
import { ProductCategories } from "./product-categories";
import { Products } from "./products";
import { ProductPagination } from "./product-pagination";

export const ProductSection = () => (
  <section className="ftco-section">
    <div className="container">
      <ProductCategories />
      <Products />
      <ProductPagination />
    </div>
  </section>
);
