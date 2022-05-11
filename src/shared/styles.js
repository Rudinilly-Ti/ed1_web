import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

    * {
        margin: 0 auto;
        padding: 0%;
    }

    html body {
        font-family: Roboto, sans-serif;
    }

    input {
        outline: none;
    }
`;

export default GlobalStyle;