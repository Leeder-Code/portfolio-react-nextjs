import React, { FC } from 'react'

import styled from 'styled-components'

import SectionTitleText from 'src/components/layout/SectionTitleText'
import Divider from 'src/components/layout/Divider'

const Technologies: FC<{ technologies: Object }> = () => {
  return (
    <TechnologiesStyles id="technologies">
      <Divider width={84} height={6} color1="#2c8eb8" color2="#30aba0" />
      <SectionTitleText>Technologies</SectionTitleText>
    </TechnologiesStyles>
  )
}
const TechnologiesStyles = styled.section`
  padding: 50px 0;
`
export default Technologies
