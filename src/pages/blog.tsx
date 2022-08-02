import React from "react";
import { graphql } from "gatsby";

// Components
import { Layout, PostLink, TextLink } from "~/components";

type BlogPageProps = {
  data: {
    allMarkdownRemark: {
      edges: Array<{
        node: {
          id: string;
          excerpt: string;
          frontmatter: {
            date: string;
            path: string;
            title: string;
            author: string;
          };
        };
      }>;
    };
  };
};

const BlogIndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}: BlogPageProps) => {
  const Posts = edges.map((edge) => <PostLink key={edge.node.id} post={edge.node} />);

  return (
    <Layout title="Blog">
      <div className="container">
        <div className="row my-5">
          <div className="col">
            <h1>Blog</h1>
            <TextLink to="/tags">View all tags</TextLink>
            {Posts}
          </div>
        </div>
      </div>
    </Layout>
  );
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
