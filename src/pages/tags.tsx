import React from "react";

import { graphql } from "gatsby";
import kebabCase from "lodash/kebabCase";
import styled from "styled-components";

import { Layout, TagLink } from "~/components";

const TagCloud = styled.div`
  display: flex;
  gap: 0.5em;

  flex-wrap: wrap;
`;

type TagsPageProps = {
  data: {
    allMarkdownRemark: {
      group: {
        fieldValue: string;
        totalCount: number;
      }[];
    };
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
};

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
  },
}: TagsPageProps) => (
  <Layout title="Tags">
    <div className="container">
      <div className="row my-5" id="tags">
        <div className="col">
          <h1>Tags</h1>
          <p>Explore all of our posts through their tags.</p>
          <TagCloud>
            {group.map((tag) => (
              <TagLink key={tag.fieldValue} to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                {tag.fieldValue} ({tag.totalCount})
              </TagLink>
            ))}
          </TagCloud>
        </div>
      </div>
    </div>
  </Layout>
);

export default TagsPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
