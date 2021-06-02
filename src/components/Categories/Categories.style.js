import styled from "styled-components";

export const CategoriesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px 0;

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
      width: 80px;
      margin-bottom: 20px;

      @media (max-width: 768px) {
        width: 50px;
      }
      @media (max-width: 350px) {
        width: 40px;
      }
    }

    p {
      font-family: "Lato", sans-serif;
      text-align: center;

      @media (max-width: 768px) {
        font-size: 12px;
      }
    }
  }
`;
