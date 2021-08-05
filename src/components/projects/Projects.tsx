import React, { FC } from 'react'
import Divider from 'src/components/layout/Divider'
import SectionTitleText from 'src/components/layout/SectionTitleText'
import Card from 'src/components/projects/Card'
import styled from 'styled-components'

const Projects: FC<{ projects: any[] }> = ({ projects }) => {
  console.log(projects)
  const CardsComponents = projects.map(
    ({ id, imgSrc, title, about, stack, githubLink, pageLink }) => (
      <Card
        key={id}
        imgSrc={imgSrc}
        title={title}
        about={about}
        stack={stack}
        githubLink={githubLink}
        pageLink={pageLink}
      />
    )
  )
  return (
    <ProjectsStyles id="projects">
      <Divider width={84} height={6} color1="#2c8eb8" color2="#30aba0" />
      <SectionTitleText>Projects</SectionTitleText>
      <CardContainerStyles>{CardsComponents}</CardContainerStyles>
    </ProjectsStyles>
  )
}
const ProjectsStyles = styled.section`
  padding: 50px 0px;
`
const CardContainerStyles = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 25px;
  row-gap: 50px;
`
export default Projects
