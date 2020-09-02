import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @font-face {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 300;
    src: local('Source Sans Pro Light'), local('SourceSansPro-Light'),
      url('/fonts/source-sans-pro-v13-light.woff2') format('woff2');
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
    background-color: #6e7dab;
    box-sizing: border-box;
    min-height: 100%;
    position: relative;
    text-size-adjust: 100%;
  }

  body {
    color: #6e7dab;
    font: 300 1rem/1.25 "Source Sans Pro", sans-serif;
    margin: 0 auto;
  }

  .footer__icon {
    fill: #6e7dab;
    height: 30px;
    margin-left: 12px;
    margin-right: 12px;
    transition: fill 0.25s ease;
    width: 30px;

    &:hover {
      fill: #575366;
    }
  }
`;
