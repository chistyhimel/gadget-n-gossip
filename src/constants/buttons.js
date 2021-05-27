import styled from "styled-components";

export const ButtonPrimary = styled.button`
  background-color: ${({ outlined, theme }) =>
    outlined ? theme.colors.white : theme.colors.primary.deep};
  padding: 10px 40px;
  border: 2px solid ${({ outlined, theme }) => theme.colors.primary.deep};
  color: ${({ outlined, theme }) =>
    outlined ? theme.colors.primary.deep : theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.tertiary};
  letter-spacing: 1px;
  transition: all 0.3s;

  &:hover {
    background-color: ${({ outlined, theme }) =>
      outlined ? theme.colors.primary.deep : theme.colors.white};
    color: ${({ outlined, theme }) =>
      outlined ? theme.colors.white : theme.colors.primary.deep};
  }
`;
