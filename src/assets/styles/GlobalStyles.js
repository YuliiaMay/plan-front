import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'RobotoFlex';
        font-weight: 400;
        font-size: 16px;
        background-color: #F3F3F3;
        color: #111111;
        margin: 0;
    };

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
        margin: 0;
    }

    a {
        text-decoration: none;
        color: currentColor;
    }

    ul {
        padding: 0;
        margin: 0;
    }

    li,
    ul {
        list-style: none;
    }

    button {
        display: block;
        cursor: pointer;
        background-color: transparent;
        border:none;
        padding: 0;
        margin: 0;
    }
`;
