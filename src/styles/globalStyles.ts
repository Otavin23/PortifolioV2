import { createGlobalStyle } from "styled-components";

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

        animation-duration: 1s;
        animation-name: opacityMain;

        @keyframes opacityMain {
            0%{
                opacity: 0.1;
            }
            50%{
                opacity: 0.1;
            }
            100%{
                opacity: 1;
            }
        }

    }
    
    ::-webkit-scrollbar {
        width:1px;
        height: 10px;
    }
    
    ::-webkit-scrollbar-track {
        background:transparent;
    }
    
    ::-webkit-scrollbar-thumb {
        background: #3a3a3a;
    }
`;
