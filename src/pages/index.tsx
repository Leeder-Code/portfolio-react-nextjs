import Head from 'next/head'

import styled from 'styled-components'

import Header from 'src/components/Header/Header'
import Footer from 'src/components/Footer/Footer'
import Main from 'src/components/Main/Main'

import { SERVER } from 'src/lib/constants'

type SSR = {
  projects: object
  technologies: object
}

export default function Home({ projects, technologies }) {
  console.log(projects, technologies)
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

export const getStaticProps = async () => {
  const [projects, technologies] = await Promise.all([
    fetch(`${SERVER}/api/projects`).then((res) => res.json()),
    fetch(`${SERVER}/api/technologies`).then((res) => res.json()),
  ])

  return {
    props: {
      projects,
      technologies,
    },
  }
}
