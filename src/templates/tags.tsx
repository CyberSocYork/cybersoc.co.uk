import React from "react";

import { graphql } from "gatsby";

import { TextLink, Layout, PostLink } from "~/components";

type TagTemplateProps = {
  pageContext: {
    tag: string;
  };
  data: {
    allMarkdownRemark: {
      totalCount: number;
      edges: {
        node: {
          frontmatter: {
            title: string;
            path: string;
            author: string;
            date: string;
          };
          excerpt: string;
          fields: {
            slug: string;
          };
        };
      }[];
    };
  };
};

const TagTemplate = ({ pageContext, data }: TagTemplateProps) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMarkdownRemark;
  const tagHeader = `${totalCount} post${totalCount === 1 ? "" : "s"} tagged with "${tag}"`;

  return (
    <Layout title={`Posts tagged "${tag}"`}>
      <div className="container">
        <div className="row my-5" id="tags">
          <div className="col">
            <h1>{tagHeader}</h1>
            <TextLink to="/tags">View all tags</TextLink>
            {edges.map(({ node }) => {
              const { path } = node.frontmatter;

              return <PostLink key={path} post={node} />;
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TagTemplate;

export const pageQuery = graphql`
  query ($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 350)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            author
          }
        }
      }
    }
  }
`;
