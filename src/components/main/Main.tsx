import React, { FC } from 'react'

import styled from 'styled-components'

import About from 'src/components/About/About'
import Hero from 'src/components/Hero/Hero'
import Projects from 'src/components/Projects/Projects'
import Technologies from 'src/components/Technologies/Technologies'

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
