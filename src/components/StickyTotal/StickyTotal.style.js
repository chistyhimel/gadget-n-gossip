import styled from "styled-components";

export const StickyTotalWrap = styled.div`
  height: 70px;
  width: 90px;
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  background-color: ${({ theme }) => theme.colors.primary.deep};
  color: ${({ theme }) => theme.colors.white};
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 14px;
`;
