import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }

  :root {
    font-size: 62.5%;
  }

  body {
    background: ${({ theme }) => theme.COLORS.DARK["400"]};
    color: ${({ theme }) => theme.COLORS.LIGHT["100"]};
    
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: ${({ theme }) => theme.FONTS.TITLE};

    outline: none;
  }
  p, spam, a {
    font-family: ${({ theme }) => theme.FONTS.TEXT};
  }
  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transform: filter .2s;
  }

  button:hover, a:hover {
    filter: brightness(.9);
  }
`;
