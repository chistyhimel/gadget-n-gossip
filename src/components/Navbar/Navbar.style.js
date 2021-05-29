import styled from "styled-components";

export const NavbarContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const NavbarLogo = styled.img`
  width: 100%;
`;

export const NavItemsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;

  p {
    font-family: ${({ theme }) => theme.fonts.tertiary};
  }

  & > * {
    cursor: pointer;
  }

  & > :last-child {
    background-color: ${({ theme }) => theme.colors.primary.deep};
    height: 40px;
    width: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 17px;
    }
  }
`;
