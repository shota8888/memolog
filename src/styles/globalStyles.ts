import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
      Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    line-height: 1.6;
    font-size: 18px;
    @media (max-width: 1024px) {
      font-size: 16px;
    }
  }

  * {
    box-sizing: border-box;
  }

  a {
    color: rgba(0,68,204,1.0);
    text-decoration: none;
    cursor: pointer;
  }

  img {
    max-width: 100%;
    display: block;
  }
`

export default GlobalStyle





