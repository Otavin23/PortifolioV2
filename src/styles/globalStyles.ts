import { createGlobalStyle } from "styled-components";

export const CreateGlobalStyles = createGlobalStyle` 
    *{
        padding: 0;
        margin: 0; 
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }
    :root{
        --background: #161616;
        --backgroundTwo: #0B0B0B;
        --backgroundMark:#034A73;
  }
`;
