import { createGlobalStyle, ThemeProvider } from 'styled-components'

const theme = {}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
  }
  body{
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  button {
    cursor: pointer;
  }
  button:hover {
    opacity: 0.8;
  }
`
