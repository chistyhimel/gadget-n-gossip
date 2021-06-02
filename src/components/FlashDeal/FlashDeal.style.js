import { Col } from "react-grid-system";
import styled from "styled-components";

export const FlashDealWrapper = styled.div`
  color: ${({ theme }) => theme.colors.textColor};
  h1 {
    width: fit-content;
  }

  .flash_deal_products {
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

export const FlashDealCol = styled(Col)`
  img {
    width: 100%;
    height: 100%;
  }
`;
