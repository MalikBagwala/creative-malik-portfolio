import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import WorkCard from "./WorkCard"
import SectionHeader from "./SectionHeader"
import styled from "styled-components"
import { Container } from "../utils/styledComponents"

const WorkWrapper = styled.div`
  background: var(--gray-100);
`
export const WorkContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 6rem 0;
  @media ${(props) => props.theme.mediaQueries.large} {
    padding: 4.5rem 0;
  }
  @media ${(props) => props.theme.mediaQueries.medium} {
    padding: 3rem 0;
  }
  @media ${(props) => props.theme.mediaQueries.small} {
    padding: 2rem 0;
  }
`

const Work = () => {
  const workData = useStaticQuery(graphql`
    {
      allContentfulWork(sort: { order: [DESC], fields: [updatedAt] }) {
        edges {
          node {
            contentful_id
            title
            note {
              json
            }
            description {
              json
            }
            live
            source
            thumbnail {
              contentful_id
              fluid(maxWidth: 800, quality: 80) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)
  const works = workData && workData.allContentfulWork.edges

  return (
    <WorkWrapper id="work">
      <WorkContainer>
        <SectionHeader>Work</SectionHeader>
        {works &&
          works.map(({ node: work }) => {
            return <WorkCard key={work.contentful_id} {...work}></WorkCard>
          })}
      </WorkContainer>
    </WorkWrapper>
  )
}

export default Work
