import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import CommitteeCard from "./CommitteeCard";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(300px, 1fr)
  ); // Fill with cards min-width 300px and max-wdith 1 fraction.
  grid-auto-rows: auto;
  gap: 1rem;
  column-gap: 1rem;
  margin-top: 2em;
  text-align: center;
`;

const CommitteeGrid = () => {
  const data = useStaticQuery(graphql`
    query {
      allCommitteeJson {
        edges {
          node {
            id
            name
            role
            desc
            image {
              childImageSharp {
                gatsbyImageData(
                  height: 200
                  width: 200
                  quality: 100
                  layout: CONSTRAINED
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
    }
  `);

  const members = data.allCommitteeJson.edges;

  return (
    <Wrapper>
      {members &&
        members.map(({ node }) => (
          <CommitteeCard
            name={node.name}
            role={node.role}
            desc={node.desc}
            image={node.image}
            key={node.id}
          />
        ))}
    </Wrapper>
  );
};

export default CommitteeGrid;