import { Col } from "react-grid-system";
import styled from "styled-components";

export const CardWrap = styled.div`
  /* height: 500px; */
  padding: 12px 10px;
  cursor: pointer;
  overflow: hidden;
  box-shadow: ${({ outlined }) => (outlined ? "0px 0px 2px #000000" : "")};
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

    @media (max-width: 560px) {
      font-size: 12px;
    }
  }

  small {
    text-align: right;
    display: block;
    margin-top: 15px;

    @media (max-width: 560px) {
      font-size: 12px;
    }
  }

  del {
    color: lightgray;
  }

  span {
    color: ${({ theme }) => theme.colors.primary.deep};
  }
`;
