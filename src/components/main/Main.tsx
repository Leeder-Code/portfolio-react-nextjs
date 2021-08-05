import React, { FC } from 'react'

import styled from 'styled-components'

import About from 'src/components/about/About'
import Hero from 'src/components/hero/Hero'
import Projects from 'src/components/projects/Projects'
import Technologies from 'src/components/technologies/Technologies'

const Main: FC<{ projects: Object; technologies: Object }> = ({
  projects,
  technologies,
}) => {
  return (
    <MainStyles>
      <Hero />
      <Projects projects={projects} />
      <Technologies technologies={technologies} />
      <About />
    </MainStyles>
  )
}

const MainStyles = styled.main`
  max-width: 1040px;
  margin: auto;
  font-size: 1.6rem;
`

export default Main
