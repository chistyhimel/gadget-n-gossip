import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*::before,
*::after,
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

  }
  *:focus {
    outline: none;
}


  body {
    overflow-x: hidden;

    .slick-prev, .slick-next{
        display: none !important;
    }

  }

  h1 {
    font-family: ${({ theme }) => theme.fonts.primary};
    position: relative;

    @media (max-width: 768px) {
        font-size: 22px;
      }
    @media (max-width: 560px) {
        font-size: 18px;
      }
  }

  .hr {
      &:after{
        content: "";
        background-color: ${({ theme }) => theme.colors.textColor};
        width: 300px;
        height: 0.5px;
        display: inline-block;
        margin-left: 20px;

        @media (max-width: 768px) {
        width: 180px;
      }
        @media (max-width: 560px) {
        width: 80px;
      }
     
      }
    }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

`;

export default GlobalStyle;
