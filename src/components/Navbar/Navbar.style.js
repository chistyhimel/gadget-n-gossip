import styled from "styled-components";

export const NavbarContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid #ebebeb;
`;

export const NavbarWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  position: relative;

  .hamburger__icon {
    display: none;
    @media (max-width: 768px) {
      display: block;
      order: 2;
      width: 40px;
      /* background-color: red; */
      font-size: 50px;
      color: ${({ theme }) => theme.colors.primary.deep};
    }
    order: 3;
  }
`;

export const NavbarLogo = styled.img`
  width: 18%;
  padding: 10px 0;
  @media (max-width: 768px) {
    order: 2;
    width: 60%;
    padding: 0;
  }
`;

export const NavItemsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 15%;

  @media (max-width: 768px) {
    order: 1;
    width: 40px;
  }

  p {
    font-family: ${({ theme }) => theme.fonts.tertiary};
  }

  & > * {
    cursor: pointer;
  }

  & > :nth-child(1) {
    @media (max-width: 768px) {
      display: none;
    }
  }
  & > :nth-child(2) {
    @media (max-width: 768px) {
      display: none;
    }
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
