import React, { FC } from 'react'

import styled from 'styled-components'
import About from '../About/About'

import Hero from '../Hero/Hero'
import Projects from '../Projects/Projects'

const Main: FC = () => {
  return (
    <MainStyles>
      <Hero />
      <About />
      <Projects />
    </MainStyles>
  )
}

const MainStyles = styled.main`
  max-width: 1040px;
`

export default Main
