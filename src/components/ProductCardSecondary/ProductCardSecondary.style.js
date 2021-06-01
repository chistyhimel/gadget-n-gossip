import { Col } from "react-grid-system";
import styled from "styled-components";

export const ProductCardSecondaryWrap = styled.div`
  height: 120px;
  margin-bottom: 20px;
`;

export const ProductCardSecondyCol = styled(Col)`
  .img__wrap {
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.primary.deep};
    img {
      width: 50px;
    }

    p {
    }
  }

  .product__info {
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    height: 100%;
    small {
      color: ${({ theme }) => theme.colors.primary.deep};
      display: block;
    }
  }
`;
