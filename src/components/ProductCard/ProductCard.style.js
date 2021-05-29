import { Col } from "react-grid-system";
import styled from "styled-components";

export const CardWrap = styled.div`
  /* height: 500px; */
  width: 250px;
  background-color: red;
  .card__img__wrapper {
    img {
      width: 100%;
      height: auto;
      object-fit: contain;
    }
  }
`;

export const CardCol = styled(Col)``;
