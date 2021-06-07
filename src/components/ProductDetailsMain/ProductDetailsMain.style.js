import styled from "styled-components";

export const ProductDetailsMainWrap = styled.div`
  background: linear-gradient(
    to left,
    #ffff 60%,
    ${({ theme }) => theme.colors.primary.light} 40%
  );
`;
