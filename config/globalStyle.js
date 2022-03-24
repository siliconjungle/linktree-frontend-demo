import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
      font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Se UI Symbol";
  }
  html, body, #root {
    padding: 0;
    margin: 0;
  }
  * {
    box-sizing: border-box;
  }
`

export default GlobalStyle
