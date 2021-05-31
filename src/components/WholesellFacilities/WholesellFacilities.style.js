import { Col } from "react-grid-system";
import styled from "styled-components";

export const WholesellFacilitiesWrap = styled.div`
  margin: 100px 0;
  color: ${({ theme }) => theme.colors.textColor};
`;

export const WholesellFacilitiesCol = styled(Col)`
  position: relative;
  height: 55vh;

  .left__section {
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;
    flex-direction: column;
  }

  .right__section {
    background-color: ${({ theme }) => theme.colors.primary.deep};
    width: 75%;
    height: 85%;
    margin-left: auto;
  }
  img {
    width: 75%;
    height: 85%;
    object-fit: cover;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: red;
    filter: drop-shadow(5px 6px 22px rgba(0, 0, 0, 0.38));
  }
`;
