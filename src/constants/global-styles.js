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
  }

  .hr {
      &:after{
        content: "";
        background-color: ${({ theme }) => theme.colors.textColor};
        width: 300px;
        height: 0.5px;
        display: inline-block;
        margin-left: 20px;
     
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
