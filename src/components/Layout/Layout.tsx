import React, { FC } from 'react'
import styled from 'styled-components'

const Layout: FC = ({ children }) => {
  return <LayoutStyles>{children}</LayoutStyles>
}

const LayoutStyles = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: auto;
`

export default Layout
