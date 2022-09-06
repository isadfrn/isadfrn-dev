import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    outline: none;
    -webkit-font-smoothing: antialiased;
  }

  button, a {
    transition: filter 0.2s;
  }

  a {
    text-decoration: none;
  }

  button:hover, a:hover {
    cursor: pointer;
    filter: brightness(0.9);
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px #0000004D;
    box-shadow: inset 0 0 6px #0000004D;
    -webkit-border-radius: 10px;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background: #C4C4CCb3;
    -webkit-box-shadow: inset 0 0 6px #00000080;
    box-shadow: inset 0 0 6px #00000080;
  }

  ::-webkit-scrollbar-thumb:window-inactive {
    background: #C4C4CC66;
  }
`;
