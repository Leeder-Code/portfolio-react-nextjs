import Head from 'next/head'

import styled from 'styled-components'

import Header from 'src/components/Header/Header'
import Footer from 'src/components/Footer/Footer'
import Main from 'src/components/Main/Main'

export default function Home() {
  return (
    <>
      <Head>
        <title>Mateusz Budzyński</title>
        <meta
          name="description"
          content="portfolio, development, frontend, resume"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main />
      <Footer />
    </>
  )
}
