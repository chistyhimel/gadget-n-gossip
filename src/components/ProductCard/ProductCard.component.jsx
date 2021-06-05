import React from "react";
import { CardCol, CardWrap } from "./ProductCard.style";
import img from "../../assets/product-images/earphone.png";
import { Row } from "react-grid-system";
import Fade from "react-reveal/Fade";

function ProductCard({ product, outlined }) {
  return (
    <>
      <Fade bottom cascade>
        <CardWrap className="product__card__wrap" outlined={outlined}>
          <Row>
            <CardCol xs={12} className="card__img__wrapper">
              <img src={product.img} alt="" />
            </CardCol>

            <CardCol xs={12}>
              <p>{product.title.substring(0, 40) + "..."}</p>
              <small>
                Price: &nbsp;
                <del>৳ 1450</del> &nbsp;
                <span>৳ {product.price}</span>
              </small>
            </CardCol>
          </Row>
        </CardWrap>
      </Fade>
    </>
  );
}

export default ProductCard;
