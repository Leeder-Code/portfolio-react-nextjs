import React, { FC } from 'react'

import styled from 'styled-components'

const Hero: FC = () => {
  return <HeroStyles id="hero">x</HeroStyles>
}

const HeroStyles = styled.section`
  height: calc(100vh - 75px);
  margin: auto;
  font-size: 1.6rem;
`

export default Hero
