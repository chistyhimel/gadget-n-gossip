import styled from "styled-components";

export const CategoryProductsWrap = styled.div`
  h1 {
    margin-bottom: 35px;
    color: ${({ theme }) => theme.colors.textColor};
    font-size: 26px;
    position: relative;

    &::after {
      content: "";
      background-color: ${({ theme }) => theme.colors.textColor};
      width: 50px;
      position: absolute;
      display: block;
      left: 0;
      bottom: -10px;
      height: 0.5px;
    }
  }
`;
