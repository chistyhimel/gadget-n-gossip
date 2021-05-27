import React, { useRef } from "react";
import { Container } from "../../constants/container";
import { CategoriesContainer, CategroyCard } from "./Categories.style";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import leftArrow from "../../assets/icons/arrow-left.png";
import rightArrow from "../../assets/icons/arrow-right.png";
import { categoryData } from "../../data/category-data";

function Categories() {
  const sliderRef = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
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
          <button onClick={() => gotoPrev()}>
            {" "}
            <img src={leftArrow} alt="left-arrow" />{" "}
          </button>
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
          <button onClick={() => gotoNext()}>
            <img src={rightArrow} alt="left-arrow" />
          </button>
        </CategoriesContainer>
      </Container>
    </>
  );
}

export default Categories;
