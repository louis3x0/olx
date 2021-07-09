import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  body,
  html {
    font-family: "Lato", sans-serif;
    background: #fff;
    height: 100%;

  }
  
  html{
    overflow-x: hidden;
  }
  
  a{
    text-decoration: none;
  }

  ul{
    list-style: none;
}
input, button{
  border: 0;
  outline: none;
  background: none;
  font-weight: bold;
}
button{
  cursor: pointer;
}

`;
