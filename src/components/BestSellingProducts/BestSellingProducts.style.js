import styled from "styled-components";

export const BestSellingProductsWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px 0;

  .best__selling_products {
    margin: 20px 0;
  }

  .slick-slide > div {
    margin: 0 20px;
    @media (max-width: 1200px) {
      margin: 0 10px;
    }
    @media (max-width: 560px) {
      margin: 0 5px;
    }
  }
  .slick-list {
    margin: 0 -20px;
    @media (max-width: 1200px) {
      margin: 0 -10px;
    }
    @media (max-width: 560px) {
      margin: 0 -5px;
    }
  }
`;
