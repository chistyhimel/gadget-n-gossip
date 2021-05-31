import React from "react";
import { CardCol, CardWrap } from "./ProductCard.style";
import img from "../../assets/product-images/earphone.png";
import { Row } from "react-grid-system";

function ProductCard({ product }) {
  return (
    <>
      <CardWrap>
        <Row>
          <CardCol xs={12} className="card__img__wrapper">
            <img src={product.img} alt="" />
          </CardCol>

          <CardCol xs={12}>
            <p>
              {product.title.length > 38
                ? product.title.substring(0, 38 - 3) + "..."
                : product.title}
            </p>
            <small>
              Price: &nbsp;
              <del>৳ 1450</del> &nbsp;
              <span>৳ {product.price}</span>
            </small>
          </CardCol>
        </Row>
      </CardWrap>
    </>
  );
}

export default ProductCard;
