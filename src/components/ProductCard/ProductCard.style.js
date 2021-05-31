import { Col } from "react-grid-system";
import styled from "styled-components";

export const CardWrap = styled.div`
  /* height: 500px; */
  padding: 12px 10px;
  cursor: pointer;
  overflow: hidden;
  box-shadow: 0px 0px 2px #000000;
  .card__img__wrapper {
    overflow: hidden;
    img {
      transition: all 0.3s;
      width: 100%;
      height: auto;
      object-fit: contain;
      transform: scale(1);
    }
  }

  &:hover img {
    transform: scale(1.2);
  }
`;

export const CardCol = styled(Col)`
  p {
    font-family: ${({ theme }) => theme.fonts.secondary};
    margin: 8px 0;
  }

  small {
    text-align: right;
    display: block;
    margin-top: 15px;
  }

  del {
    color: lightgray;
  }

  span {
    color: ${({ theme }) => theme.colors.primary.deep};
  }
`;