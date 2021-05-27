import styled from "styled-components";

export const CategoriesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px 0;

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
    }
  }

  .slick-slide > div {
    margin: 0 45px;
    @media (max-width: 1200px) {
      margin: 0 10px;
    }
    @media (max-width: 560px) {
      margin: 0 5px;
    }
  }
  .slick-list {
    margin: 0 -45px;
    @media (max-width: 1200px) {
      margin: 0 -10px;
    }
    @media (max-width: 560px) {
      margin: 0 -5px;
    }
  }
`;

export const CategroyCard = styled.div`
  /* width: 150px !important;
  height: 150px !important; */
  /* background-color: red; */
  cursor: pointer;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      width: 90px;
      margin-bottom: 20px;
    }

    p {
      font-family: "Lato", sans-serif;
    }
  }
`;
