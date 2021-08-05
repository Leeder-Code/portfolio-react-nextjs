import Head from 'next/head'

import { FC } from 'react'
import { GetStaticProps } from 'next'

import Header from 'src/components/header/Header'
import Footer from 'src/components/footer/Footer'
import Main from 'src/components/main/Main'

import { SERVER } from 'src/lib/constants'

type SSR = {
  projects: any[]
  technologies: any[]
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
    fetch(`${SERVER}/api/projects`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((res) => res.data),
    fetch(`${SERVER}/api/technologies`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json()),
  ])
  return {
    props: {
      projects,
      technologies,
    },
  }
}
