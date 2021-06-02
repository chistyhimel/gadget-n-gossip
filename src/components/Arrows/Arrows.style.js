import styled from "styled-components";

export const ArrowWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    display: none;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    cursor: pointer;

    img {
      width: 30px;

      @media (max-width: 1200px) {
        width: 20px;
      }
    }
  }
`;
