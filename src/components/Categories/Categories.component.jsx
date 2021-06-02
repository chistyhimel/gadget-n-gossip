import React, { useRef } from "react";
import { Container } from "../../constants/container";
import { CategoriesContainer, CategroyCard } from "./Categories.style";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import leftArrow from "../../assets/icons/arrow-left.png";
import rightArrow from "../../assets/icons/arrow-right.png";
import { categoryData } from "../../data/category-data";
import Arrows from "../Arrows/Arrows.component";

function Categories() {
  const sliderRef = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 1,
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
        <CategoriesContainer>
          <Arrows left goto={gotoPrev} />
          <Container md>
            <Slider {...settings} ref={sliderRef}>
              {categoryData.map((pd, idx) => (
                <CategroyCard key={idx}>
                  <div>
                    <img src={pd.img} alt="" />
                    <p>{pd.titile}</p>
                  </div>
                </CategroyCard>
              ))}
            </Slider>
          </Container>
          <Arrows right goto={gotoNext} />
        </CategoriesContainer>
      </Container>
    </>
  );
}

export default Categories;
