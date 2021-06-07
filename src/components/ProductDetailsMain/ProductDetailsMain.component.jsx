import React from "react";
import { Col, Row } from "react-grid-system";
import { Link } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { Container } from "../../constants/container";
import { ProductDetailsMainWrap } from "./ProductDetailsMain.style";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import img from "../../assets/images/img.png";

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
  const breadcrumbs = useBreadcrumbs();

  return (
    <>
      <ProductDetailsMainWrap>
        <Container lg>
          <Row>
            <Col xs={6}>
              <ImageGallery
                items={images}
                thumbnailPosition={"left"}
                showPlayButton={false}
                useBrowserFullscreen={false}
              />
            </Col>
            <Col xs={6}></Col>
          </Row>
        </Container>
      </ProductDetailsMainWrap>
    </>
  );
}

export default ProductDetailsMain;
