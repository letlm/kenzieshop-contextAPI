import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        
    }

    :root{
        --white: #f5f5f5;
        --vanilla: #f5ffe8;
        --vanillaTwo: #eee8cc;
        --black: #0c0d0d;
        --green: #7ed964;
        --greenTwo:#457062;
        --greenThree: #d0f79dff;
        --brown: #442407;
       
    }

    .toastify-color-progress-light {
        background-color: var(--white);
        box-shadow: 10px 10px 69px -2px rgba(8,143,78,0.47);
        color: var(--black);
        font-family: 'PT Serif', serif;
    }

    .Toastify__progress-bar-theme--light {
        background: var(--green);
    }

    body{
        /* background: var(--greenThree); */
        color: var(--black);
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        width: 100vw;
        min-width: 400px;
    }

    body, input, button{
        font-family: 'Nunito', sans-serif;
        font-size: 1rem;
    }

    h1,h2,h3,h4,h5,h6{
        font-family: 'Inter', sans-serif;
        font-weight: 700;
    }

    button{
        cursor: pointer;
    }

    li{
        list-style:none
    }

    
`;
