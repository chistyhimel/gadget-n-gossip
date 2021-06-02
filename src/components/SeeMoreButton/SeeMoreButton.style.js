import { Col } from "react-grid-system";
import styled from "styled-components";

export const SeeMoreButtonWrap = styled.div`
  margin: 40px 0;
`;

export const SeeMoreButtonCol = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  button {
    width: 100%;
    height: 100%;
    padding: 0;
  }

  .underline {
    background-color: ${({ theme }) => theme.colors.primary.deep};
    height: 1px;
    width: 100%;
  }
`;
