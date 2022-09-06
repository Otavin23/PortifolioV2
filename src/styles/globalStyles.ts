import { createGlobalStyle } from "styled-components";

export const CreateGlobalStyles = createGlobalStyle` 
    *{
        padding: 0;
        margin: 0; 
        box-sizing: border-box;
    }
    :root{
        --background: #161616;
        --backgroundTwo: #0B0B0B;
        --backgroundMark:#034A73;
    }
    ::-webkit-scrollbar {
        width:10px;
        height: 10px;
    }
    ::-webkit-scrollbar-track {
        background:#333;
    }
    ::-webkit-scrollbar-thumb {
        background: #2e9dd8;
    }
`;
