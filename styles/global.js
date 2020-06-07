import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @font-face {
    font-display: block;
    font-family: 'Patua One';
    font-style: normal;
    font-weight: 400;
    src: local('Patua One'), local('PatuaOne-Regular'),
        url('/fonts/patua-one-v10-regular.woff2') format('woff2');
  }

  /* stylelint-disable selector-max-universal */
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  /* stylelint-enable selector-max-universal */

  html {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: #111111;
    box-sizing: border-box;
    min-height: 100%;
    overflow-y: scroll;
    position: relative;
    scroll-behavior: smooth;
    text-size-adjust: 100%;
  }

  body {
    color: #ffffff;
    font: 1rem/1.5 "Patua One", serif;
    margin: 0 auto;
    width: 85%;
  }

  a {
    color: #eb611c;
    text-decoration: none;
    transition: color 0.3s ease-in-out;
  }

  a:hover {
    color: #ffffff;
  }

  .footer__icon {
    fill: #ffffff;
    height: 30px;
    margin-left: 25px;
    width: 30px;
  }
`
