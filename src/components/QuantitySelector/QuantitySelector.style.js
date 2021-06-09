import styled from "styled-components";

export const QuantitySelectorWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    height: 30px;
    width: 30px;
    border: 1px solid lightgray;
    background-color: #fff;
    font-size: 22px;
    transition: all 0.3s;

    &:hover {
      background-color: ${({ theme }) => theme.colors.primary.deep};
      color: ${({ theme }) => theme.colors.white};
    }
  }

  span {
    color: ${({ theme }) => theme.colors.textColor};
    font-size: 22px;
    padding: 0 20px;
  }
`;
