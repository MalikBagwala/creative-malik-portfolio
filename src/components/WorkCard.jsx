import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLink } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import styled from "styled-components"
import ContentMarkdownNote from "../utils/contentful-markdown-note"
import ContentMarkdownWork from "../utils/contentful-markdown-work"
import ButtonLink from "./ButtonLink"
import Img from "gatsby-image"
export const StyledIcon = styled(FontAwesomeIcon)`
  margin-right: 3px;
`

const WorkCardWrapper = styled.div`
  margin: 3.5rem 0px;
  width: 100%;
  background: white;
  display: flex;
  align-items: center;
  width: 100%;
  @media ${(props) => props.theme.mediaQueries.medium} {
    flex-direction: column !important;
    margin: 2rem 0px;
  }
`

const Content = styled.div`
  display: flex;
  flex: 1 1 50%;
  flex-direction: column;
  margin: 0 2rem;
  padding: 3rem;

  @media ${(props) => props.theme.mediaQueries.large} {
    padding: 2.5rem;
  }
  @media ${(props) => props.theme.mediaQueries.medium} {
    padding: 1.5rem 0rem;
    margin: 0 1.5rem;
    order: 2;
    align-items: center;
    text-align: center;
  }
`

const H1 = styled.h1`
  text-transform: uppercase;
  font-weight: lighter;
  font-size: 1.3rem;
  font-weight: 500;
  color: var(--gray-800);
  @media ${(props) => props.theme.mediaQueries.medium} {
    font-size: 1.1rem;
  }
`

const ButtonGroup = styled.div`
  margin-top: 2rem;
  width: 100%;
`
const Image = styled(Img)`
  margin: 0 2rem;
  flex: 1 1 50%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  @media ${(props) => props.theme.mediaQueries.medium} {
    order: 1;
    width: 100%;
    margin: 0rem;
  }
`

const LinkButtons = styled(ButtonLink)`
  margin-right: 30px;
  @media ${(props) => props.theme.mediaQueries.medium} {
    margin-right: 10px;
  }
`
const WorkCard = ({ live, source, title, thumbnail, description, note }) => {
  const fluid = thumbnail && thumbnail.fluid
  return (
    <WorkCardWrapper>
      <Image fluid={fluid} alt={`Thumnail for - ${title}`} />
      <Content>
        <H1>{title}</H1>
        <ContentMarkdownWork content={description.json} />
        {note && <ContentMarkdownNote content={note.json} />}
        <ButtonGroup>
          <LinkButtons href={live} card purple>
            <StyledIcon icon={faLink} /> Live
          </LinkButtons>
          <LinkButtons href={source} card purple>
            <StyledIcon icon={faGithub} /> Source
          </LinkButtons>
        </ButtonGroup>
      </Content>
    </WorkCardWrapper>
  )
}

export default WorkCard
