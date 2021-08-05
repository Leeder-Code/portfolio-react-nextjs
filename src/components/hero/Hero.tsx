import React, { FC } from 'react'

import styled from 'styled-components'

const Hero: FC = () => {
  return <HeroStyles id="hero">Hero section -- todo</HeroStyles>
}

const HeroStyles = styled.section`
  height: calc(100vh - 75px);
  margin: auto;
  font-size: 1.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default Hero
