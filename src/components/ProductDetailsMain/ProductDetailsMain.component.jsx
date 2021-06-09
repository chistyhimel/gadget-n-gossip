import React from "react";
import { Col, Row } from "react-grid-system";
import { Link } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { Container } from "../../constants/container";
import {
  CategoryImgWrap,
  ImageGalleryWrap,
  ProductDetailsMainWrap,
} from "./ProductDetailsMain.style";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import img from "../../assets/images/img.png";
import ImageMagnify from "./ImageMagnify.component";
import { categoryData } from "../../data/category-data";
import Breadcrumbs from "./Breadcrumbs.component";
import ProductInfo from "./ProductInfo.component";

const images = [
  {
    original: img,
    thumbnail: img,
  },
  {
    original: img,
    thumbnail: img,
  },
  {
    original: img,
    thumbnail: img,
  },
];

function ProductDetailsMain() {
  return (
    <>
      <ProductDetailsMainWrap>
        <Container lg>
          <Row>
            <Col xs={1.4}>
              <CategoryImgWrap>
                {categoryData.map((category, idx) => (
                  <img src={category.img} alt="" key={idx} />
                ))}
              </CategoryImgWrap>
            </Col>

            <Col xs={10.6}>
              <Breadcrumbs />
              <Row nogutter>
                <Col xs={6}>
                  <ImageGalleryWrap>
                    <ImageGallery
                      items={images}
                      thumbnailPosition={"left"}
                      showPlayButton={false}
                      useBrowserFullscreen={false}
                      renderItem={ImageMagnify}
                    />
                  </ImageGalleryWrap>
                </Col>
                <Col xs={6}>
                  <div id="myPortal" />
                  <ProductInfo />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </ProductDetailsMainWrap>
    </>
  );
}

export default ProductDetailsMain;
