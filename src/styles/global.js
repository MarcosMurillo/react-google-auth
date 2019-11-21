import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap");
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    outline:0;
  }
  body{
    background: #FFF;
    text-rendering:optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: 'Roboto',  Arial, Helvetica, sans-serif;;
  }
`;

export default GlobalStyle;