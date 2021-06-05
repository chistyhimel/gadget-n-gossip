import styled from "styled-components";

export const AllProductsWrap = styled.div`
  margin: 10px 0;
  .product__category__title {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    img {
      width: 70px;
      margin-right: 20px;
    }
  }
`;

export const AllProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1rem;

  @media (max-width: 1440px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 560px) {
    grid-template-columns: repeat(2, 1fr);
  }

  .product__card__wrap {
    padding: 15px;
    text-align: center;
    border: 1px solid lightgray;
  }
`;
