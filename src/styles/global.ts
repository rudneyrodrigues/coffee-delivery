import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${theme.colors.background};
    color: ${theme.colors.text.base};
  }

  body, input, textarea, button {
    font: 400 1rem ${theme.texts.body.fontFamily},sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.texts.heading.fontFamily};
  }

  button {
    border: none;
    outline: none;
    cursor: pointer;
    background: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  [disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
