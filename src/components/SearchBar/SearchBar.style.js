import styled from "styled-components";

export const SearchBarContainer = styled.div`
  height: 100%;
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 100% !important;
    order: 4;
    margin: 20px 0;
  }
`;

export const InputWrap = styled.div`
  width: 100%;
  border: 2px solid ${({ outlined, theme }) => theme.colors.primary.deep};
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;

  @media (max-width: 768px) {
    height: 45px;
  }

  .search__icon {
    width: 3%;
    margin: 0 15px;

    @media (max-width: 768px) {
      width: 20px;
    }
  }

  input {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    font-size: 18px;
    /* @media (max-width: 768px) {
      width: 80%;
    } */
  }

  button {
    width: 60px;
    height: 100%;
    border-radius: 0;
    background-color: ${({ theme }) => theme.colors.primary.deep};
    border: none;
    outline: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 8px 0;

    /* @media (max-width: 768px) {
      width: 10%;
    } */

    div {
      background-color: ${({ theme }) => theme.colors.white};
      height: 2.5px;
      width: 30px;
    }
  }
`;
