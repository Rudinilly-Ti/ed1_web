import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

    * {
        margin: 0 auto;
        padding: 0;
    }

    html body {
        font-family: Roboto, sans-serif;
        scroll-behavior: smooth;
        ::-webkit-scrollbar {
            width: 10px;
        }

        ::-webkit-scrollbar-track {
            background: #04C35C;
        }

        ::-webkit-scrollbar-thumb {
            background: #eee;
            border-radius: 10px;
        }
    }

    input {
        outline: none;
    }

    h1, h2, h3, h4, h5 {
        font-weight: 700;
    }


`;

export default GlobalStyle;