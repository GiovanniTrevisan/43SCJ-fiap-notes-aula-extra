import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  :root {
    --primary:  #FFF;
    --white: #EEE;
    --gray: #CCC;
    --bgPrimary: #ed145b;
    --overlayLight: #00000033;
    --whiteTransparent: #FFFC;
    --black: #111;
    --alertErro: #AA0000EE;
    --alertSucesso: #00AA00DD;
    --bola: calc(100vw / 13);

    --backgroundNeumorphism: #ed145b;
    --boxShadowNeumorphism: 10px 10px 20px #b60f46, -10px -10px 20px #ff1970;
    --boxShadowNeumorphismHover: 4px 4px 8px #b60f46, -4px -4px 8px #ff1970;
  }


  * {
    margin: 0;
    padding: 0;
    outline: 0;

    box-sizing: border-box;
  }

  body {
    font-family: Montserrat;

    background-color: var(--bgPrimary);
    color: var(--white);

    overflow-x: hidden;
  }

  textarea {
    border: 0;
    border-radius: 5px;
    height: 80px;
    padding: 15px 0px;

    background-color: transparent;
    font-size: 16px;
    font-family: Montserrat;
    color: var(--white);

    ::placeholder{
      color: var(--gray);
    }

  }

  input {
    border: 0;
    border-radius: 5px;
    padding: 5px;

    background-color: var(--white);
    font-size: 16px;
    font-family: Montserrat;

    ::placeholder{
      color: var(--gray);
    }

  }

  input[type="checkbox"]{
    width: 20px;
    height: 20px;
  }

  span.input-error {
    font-size: 12px;
    margin-top: -5px;
    color: var(--primary);
  }

`;
