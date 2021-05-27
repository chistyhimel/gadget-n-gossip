import React from "react";
import { Col, Row } from "react-grid-system";
import bannerImg1 from "../../assets/banner-images/banner-1.png";
import bannerImg2 from "../../assets/banner-images/banner-2.png";
import { Container } from "../../constants/container";
import { BannerContainer, BannerImgWrap } from "./Banner.style";

function Banner() {
  return (
    <>
      <Container md>
        <BannerContainer>
          <Row>
            <Col md={6}>
              <BannerImgWrap>
                <img src={bannerImg1} alt="banner" />
              </BannerImgWrap>
            </Col>
            <Col md={6}>
              <BannerImgWrap>
                <img src={bannerImg2} alt="banner" />
              </BannerImgWrap>
            </Col>
          </Row>
        </BannerContainer>
      </Container>
    </>
  );
}

export default Banner;
