import styled from "styled-components";

export const DropdownWrap = styled.div`
  width: 200px;
  margin: 20px 0;
`;

export const DropDownCategoryWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: ${({ theme }) => theme.fonts.secondary};
  cursor: pointer;

  img {
    width: 75px;
  }
`;

export const DropdownItemsWrap = styled.div`
  width: 100%;

  p {
    text-align: right;
  }
`;
