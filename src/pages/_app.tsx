import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Layout from 'src/components/Layout/Layout'
const theme = {}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
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
    background-color: #0f1624;
  }
  button {
    cursor: pointer;
  }
  button:hover {
    opacity: 0.8;
  }
`
