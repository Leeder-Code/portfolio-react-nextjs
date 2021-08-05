import Head from 'next/head'

import { FC } from 'react'
import { GetStaticProps } from 'next'

import Header from 'src/components/header/Header'
import Footer from 'src/components/footer/Footer'
import Main from 'src/components/main/Main'

import { SERVER } from 'src/lib/constants'

type SSR = {
  projects: Object
  technologies: Object
}

const Home: FC<SSR> = ({ projects, technologies }) => {
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
      <Main projects={projects} technologies={technologies} />
      <Footer />
    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps<SSR> = async () => {
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
