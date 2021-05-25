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

  }

  hr {
      background-color: #ebebeb;
      border: 0;
      height: 1px;
    }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

`;

export default GlobalStyle;
