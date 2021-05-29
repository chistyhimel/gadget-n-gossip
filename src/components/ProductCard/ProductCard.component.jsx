import React from "react";
import { CardCol, CardWrap } from "./ProductCard.style";
import img from "../../assets/product-images/earphone.png";
import { Row } from "react-grid-system";

function ProductCard({ secondary }) {
  return (
    <>
      <CardWrap>
        <Row>
          <CardCol xs={secondary ? 6 : 12} className="card__img__wrapper">
            <img src={img} alt="" />
          </CardCol>

          <CardCol xs={secondary ? 6 : 12}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
              corporis?
            </p>
            <small>
              <del>৳ 1450</del>
              <span>৳ 2000</span>
            </small>
          </CardCol>
        </Row>
      </CardWrap>
    </>
  );
}

export default ProductCard;
