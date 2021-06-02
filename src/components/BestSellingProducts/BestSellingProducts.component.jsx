import React, { useRef } from "react";
import { Container } from "../../constants/container";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { productData } from "../../data/product-data";
import ProductCard from "../ProductCard/ProductCard.component";
import Arrows from "../Arrows/Arrows.component";
import { BestSellingProductsWrap } from "./BestSellingProducts.style";
import Fade from "react-reveal/Fade";

function BestSellingProducts() {
  const sliderRef = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoPlay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  const gotoNext = () => {
    sliderRef.current.slickNext();
  };

  const gotoPrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <>
      <Container lg>
        <BestSellingProductsWrap>
          <Arrows left goto={gotoPrev} />
          <Container md>
            <h1 className="hr">Best Selling Products</h1>
            <Slider {...settings} ref={sliderRef}>
              {productData.map((product, idx) => (
                <div className="best__selling_products">
                  <ProductCard product={product} />
                </div>
              ))}
            </Slider>
          </Container>
          <Arrows right goto={gotoNext} />
        </BestSellingProductsWrap>
      </Container>
    </>
  );
}

export default BestSellingProducts;
