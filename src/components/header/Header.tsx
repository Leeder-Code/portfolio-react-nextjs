import React, { FC } from 'react'

import Link from 'next/link'

import styled from 'styled-components'

import { ImGithub, ImLinkedin } from 'react-icons/im'

const Header: FC = () => {
  return (
    <HeaderStyles>
      <Logo>Mati-Dev</Logo>
      <LinksContainer>
        <li>
          <Link passHref href="#projects">
            <LinkStyles>Projects</LinkStyles>
          </Link>
        </li>
        <li>
          <Link passHref href="#technologies">
            <LinkStyles>Technologies</LinkStyles>
          </Link>
        </li>
        <li>
          <Link passHref href="#about">
            <LinkStyles>About</LinkStyles>
          </Link>
        </li>
      </LinksContainer>
      <SocialContainer>
        <IconLinkStyles
          href="https://github.com/leeder-code"
          target="_blank"
          rel="noreferrer"
        >
          <ImGithub />
        </IconLinkStyles>
        <IconLinkStyles
          href="https://www.linkedin.com/in/mateusz-budzynski/"
          target="_blank"
          rel="noreferrer"
        >
          <ImLinkedin />
        </IconLinkStyles>
      </SocialContainer>
    </HeaderStyles>
  )
}
const HeaderStyles = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 0rem 1rem 0rem;
  align-items: center;
`
const Logo = styled.div`
  font-size: 2.4rem;
  flex: 0.3;
  font-weight: 700;
`
const LinksContainer = styled.ul`
  display: flex;
  list-style: none;
  gap: 3rem;
  font-size: 2rem;
  flex: 1;
`
const LinkStyles = styled.a`
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
`
const IconLinkStyles = styled.a`
  color: #fff;
  cursor: pointer;
  transition: transform 0.3s ease 0s;
  border-radius: 50px;
  &:hover {
    background-color: rgb(33, 45, 69);
    transform: scale(1.2);
  }
  padding: 7px 8px 0px 8px;
`
const SocialContainer = styled.ul`
  display: flex;
  gap: 3rem;
  font-size: 2.5rem;

  list-style: none;
`
export default Header
