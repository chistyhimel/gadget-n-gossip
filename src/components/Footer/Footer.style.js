import styled from "styled-components";

export const FooterContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.deep};
  color: ${({ theme }) => theme.colors.white};
  padding: 30px 0 80px 0;

  img {
    width: 80%;
  }

  p {
    font-family: ${({ theme }) => theme.fonts.tertiary};
    font-size: 18px;
    margin: 20px 0 5px 0;
    @media (max-width: 560px) {
      font-size: 16px;
    }
  }

  .hr {
    background-color: ${({ theme }) => theme.colors.white};
    display: block;
    width: 50px;
    height: 1px;
    margin-bottom: 10px;
  }

  li {
    list-style-type: none;
    font-size: 15px;
    margin-bottom: 6px;
    display: flex;
    justify-content: space-between;

    @media (max-width: 560px) {
      flex-direction: column;
      font-size: 12px;
    }
  }
`;
