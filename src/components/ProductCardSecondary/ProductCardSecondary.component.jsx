import React from "react";
import { Col, Row } from "react-grid-system";
import {
  ProductCardSecondaryWrap,
  ProductCardSecondyCol,
} from "./ProductCardSecondary.style";

function ProductCardSecondary({ product }) {
  return (
    <>
      <ProductCardSecondaryWrap>
        <Row>
          <ProductCardSecondyCol xs={4}>
            <div className="img__wrap">
              <img src={product.img} alt="" />
            </div>
          </ProductCardSecondyCol>
          <ProductCardSecondyCol xs={8}>
            <div className="product__info">
              <p>{product.title}</p>
              <small>Tk {product.price}.00</small>
            </div>
          </ProductCardSecondyCol>
        </Row>
      </ProductCardSecondaryWrap>
    </>
  );
}

export default ProductCardSecondary;
