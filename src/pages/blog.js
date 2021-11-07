import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";

// Components
import Layout from "@components/Layout";
import PostLink from "@components/PostLink";
import TextLink from "@components/TextLink";

const BlogIndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges.map((edge) => <PostLink key={edge.node.id} post={edge.node} />);

  return (
    <Layout title="Blog">
      <div className="container">
        <div className="row my-5">
          <div className="col">
            <h1>Blog</h1>
            <TextLink to="/tags">View Tags</TextLink>
            {Posts}
          </div>
        </div>
      </div>
    </Layout>
  );
};

BlogIndexPage.propTypes = {
  data: PropTypes.object,
};

export default BlogIndexPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/posts/" } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
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
