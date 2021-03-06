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

  code {
    font-size: 0.9rem;
    line-height: 1.5;
    background-color: #eee;
    color: #333;
    padding: 0.1em 0.4em;
    font-family: "SFMono-Regular",Consolas,"Liberation Mono",Menlo,Courier,monospace;
  }

  table {
    margin: 0 auto;
    border-collapse: collapse;
  }

  th, td {
    padding: 5px;
    border: 1px solid rgba(0,0,0,0.2);
  }
`

export default GlobalStyle;





