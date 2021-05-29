import { Col } from "react-grid-system";
import styled from "styled-components";

export const PaymentWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.deep};
`;

export const CustomCol = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 50%;
  }
`;
