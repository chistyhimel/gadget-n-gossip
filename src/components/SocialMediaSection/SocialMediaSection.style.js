import styled from "styled-components";

export const SocialMediaSectionWrap = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.deep};
  margin: 100px 0;
  display: flex;
  color: ${({ theme }) => theme.colors.white};
  padding: 40px 0;

  h2 {
    font-size: 32px;
    font-family: ${({ theme }) => theme.fonts.secondary};

    @media (max-width: 768px) {
      text-align: center;
      padding-bottom: 20px;
    }
  }

  .social__icons__wrap {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-size: 30px;
  }
`;
