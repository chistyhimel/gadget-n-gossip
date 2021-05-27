import styled from "styled-components";

export const SearchBarContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 40px;
`;

export const InputWrap = styled.div`
  width: 100%;
  border: 2px solid ${({ outlined, theme }) => theme.colors.primary.deep};
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;

  .search__icon {
    width: 3%;
    margin: 0 15px;
  }

  input {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    font-size: 18px;
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

    div {
      background-color: ${({ theme }) => theme.colors.white};
      height: 2.5px;
      width: 30px;
    }
  }
`;
