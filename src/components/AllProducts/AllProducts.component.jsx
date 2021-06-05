import React from "react";
import { productData } from "../../data/product-data";
import ProductCard from "../ProductCard/ProductCard.component";
import { AllProductsContainer, AllProductsWrap } from "./AllProducts.style";
import img from "../../assets/category-images/charger.png";

function AllProducts() {
  return (
    <>
      <AllProductsWrap>
        <div className="product__category__title">
          <img src={img} alt="" />
          <h1>Charger - All Brands</h1>
        </div>
        <AllProductsContainer>
          {productData.map((product, idx) => (
            <ProductCard key={idx} product={product} />
          ))}
          {productData.map((product, idx) => (
            <ProductCard key={idx} product={product} />
          ))}
          {productData.map((product, idx) => (
            <ProductCard key={idx} product={product} />
          ))}
          {productData.map((product, idx) => (
            <ProductCard key={idx} product={product} />
          ))}
        </AllProductsContainer>
      </AllProductsWrap>
    </>
  );
}

export default AllProducts;
