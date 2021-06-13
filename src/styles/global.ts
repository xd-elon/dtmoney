import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    :root {
        --background: #f0f2f5;
        --red: #E52E4D;
        --green: #33CC95;
        --blue: #5429CC;

        --blue-light: #6933FF;

        --text-title: #363f5f;
        --text-body: #969cb3;

        --shape: #ffffff;
    };

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    };
    html {
        @media(max-width: 1000px) {
            font-size: 93.75%;
        };

        @media(max-width: 720px) {
            font-size: 87.75%;
        };
    };

    body {
        background: var(--background);
        -webkit-font-smoonthing: antialiased;
    };

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    };

    [disable] {
        opacity: 0.6;
        cursor: not-allowed;
    };
`;