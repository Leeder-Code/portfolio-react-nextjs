import React, { FC } from 'react'

import styled from 'styled-components'

import Divider from 'src/components/layout/Divider'
import SectionTitleText from 'src/components/layout/SectionTitleText'

const About: FC = () => {
  return (
    <AboutStyles>
      <Divider width={84} height={6} color1="#2c8eb8" color2="#30aba0" />
      <SectionTitleText>About</SectionTitleText>
    </AboutStyles>
  )
}
const AboutStyles = styled.section`
  padding: 50px 0;
`
export default About
