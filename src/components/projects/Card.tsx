import React, { FC } from 'react'
import Divider from 'src/components/layout/Divider'
import styled from 'styled-components'
import Image from 'next/image'

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
    if (url === '') return

    window.open(url, '_blank').focus()
  }
  return (
    <CardStyles>
      <Image src={imgSrc} alt={imgSrc} width={1920} height={1080} />
      <ContentContainer>
        <TitleStyles>{title}</TitleStyles>
        <Divider width={50} height={4} color1="#14213d" color2="#1b2437" />
        <AboutStyles>{about}</AboutStyles>
        <StackTextStyles>Stack</StackTextStyles>
        <StackStyles>
          {stack.map((i, index) => (
            <Stack key={index}>{i}</Stack>
          ))}
        </StackStyles>
        <ButtonsContainerStyles>
          <ButtonStyles
            disabled={githubLink === ''}
            onClick={() => openInNewTab(githubLink)}
          >
            Code
          </ButtonStyles>
          <ButtonStyles
            disabled={pageLink === ''}
            onClick={() => openInNewTab(pageLink)}
          >
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
  box-shadow: 0 50px 50px rgb(0 0 0 / 50%);
  overflow: hidden;
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  height: 425px;
`
const TitleStyles = styled.h2`
  text-align: center;
  color: rgb(103, 169, 207);
  font-weight: 500;
`
const AboutStyles = styled.div`
  text-align: justify;
  color: #e0e0e0e0;
  width: 90%;
`
const StackTextStyles = styled.div`
  text-align: center;
  width: 100%;
  color: #6c7993;
  font-weight: 500;
  font-size: 1.8rem;
`
const StackStyles = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`
const Stack = styled.span`
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
  transition: opacity 0.3s;
  &:disabled {
    background-color: gray;
  }
`

export default Card
