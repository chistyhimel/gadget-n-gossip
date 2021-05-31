import React from "react";
import { Col, Row } from "react-grid-system";
import { Container } from "../../constants/container";
import { FlashDealCol, FlashDealWrapper } from "./FlashDeal.style";
import img1 from "../../assets/flash-deal-images/1.png";
import img2 from "../../assets/flash-deal-images/2.png";
import img3 from "../../assets/flash-deal-images/3.png";
import ProductCard from "../ProductCard/ProductCard.component";
import { productData } from "../../data/product-data";

function FlashDeal() {
  return (
    <>
      <Container lg>
        <FlashDealWrapper>
          <h1 className="hr">Flash Deal</h1>
          <br />
          <Row>
            <FlashDealCol md={6}>
              <img src={img1} alt="Flash Deal" />
            </FlashDealCol>
            <FlashDealCol md={3}>
              <img src={img2} alt="Flash Deal" />
            </FlashDealCol>
            <FlashDealCol md={3}>
              <img src={img3} alt="Flash Deal" />
            </FlashDealCol>
          </Row>
          <br />
          <br />
          <Row>
            {productData.map((product, idx) => (
              <Col md={2.4}>
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>
        </FlashDealWrapper>
      </Container>
    </>
  );
}

export default FlashDeal;
