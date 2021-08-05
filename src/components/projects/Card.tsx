import React, { FC } from 'react'
import Divider from 'src/components/layout/Divider'
import styled from 'styled-components'

type CardTypes = {
  imgSrc: string
  title: string
  about: string
  stack: string[]
  githubLink: string
  pageLink?: string
}

const Card: FC<CardTypes> = ({
  imgSrc,
  title,
  about,
  stack,
  githubLink,
  pageLink,
}) => {
  const openInNewTab = (url) => {
    window.open(url, '_blank').focus()
  }
  return (
    <CardStyles>
      <ImgStyles src={imgSrc} />
      <ContentContainer>
        <TitleStyles>{title}</TitleStyles>
        <Divider width={50} height={3} color1="#000000" color2="#ffffff" />
        <AboutStyles>{about}</AboutStyles>
        <StackTextStyles>Stack</StackTextStyles>
        <StackStyles>
          {stack.map((i, index) => (
            <Stack key={index}>{i}</Stack>
          ))}
        </StackStyles>
        <ButtonsContainerStyles>
          <ButtonStyles onClick={() => openInNewTab(githubLink)}>
            Code
          </ButtonStyles>
          <ButtonStyles onClick={() => openInNewTab(pageLink)}>
            Page
          </ButtonStyles>
        </ButtonsContainerStyles>
      </ContentContainer>
    </CardStyles>
  )
}

const CardStyles = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  border-radius: 10px;
  box-shadow: 0 50px 50px rgb(0 0 0 / 60%);
`
const ImgStyles = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
`
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 10px;
`
const TitleStyles = styled.h2`
  text-align: center;
`
const AboutStyles = styled.div`
  text-align: justify;
`
const StackTextStyles = styled.div`
  text-align: center;
  width: 100%;
`
const StackStyles = styled.div`
  display: flex;
  width: 100%;
`
const Stack = styled.span`
  flex: 1;
  white-space: nowrap;
`
const ButtonsContainerStyles = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`
const ButtonStyles = styled.button`
  color: white;
  font-weight: 700;
  font-size: 2rem;
  padding: 1rem 1.5rem;
  background: #2c8eb8;
  border-radius: 15px;
`

export default Card
