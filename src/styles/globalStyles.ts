import { createGlobalStyle } from "styled-components";

/*

font-family: 'Fira Code', monospace;
font-family: 'Inter', sans-serif;
;borda botão da hero, #484848 
*/

export const CreateGlobalStyles = createGlobalStyle` 
    
    *{
        padding: 0;
        margin: 0; 
        box-sizing: border-box;
    }
    
    :root{
        --background-primary: #1A1A1A;
        --backgroundSecondary: #1E1E1E;
        --greenColor: #6DA13F;
        --grayColor: #969696;
        --button-gray: #3A3A3A;
        --backgrounProject: #262626;
    }

    body{
        background: var(--background-primary);
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
