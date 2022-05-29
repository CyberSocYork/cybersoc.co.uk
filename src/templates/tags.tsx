import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import TextLink from "~/components/TextLink";
import Layout from "~/components/Layout";
import PostLink from "~/components/PostLink";

const TagTemplate = ({ pageContext, data }) => {
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

// I HATE this...
// Maybe should move the site to TypeScript at some point? :P
TagTemplate.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired,
      ),
    }),
  }),
};

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
