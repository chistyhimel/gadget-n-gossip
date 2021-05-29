import { Col } from "react-grid-system";
import styled from "styled-components";

export const FlashDealWrapper = styled.div`
  color: ${({ theme }) => theme.colors.textColor};
  h1 {
    width: fit-content;
  }
`;

export const FlashDealCol = styled(Col)`
  img {
    width: 100%;
    height: 100%;
  }
`;
