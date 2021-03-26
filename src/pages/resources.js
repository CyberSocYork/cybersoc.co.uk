import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";

import Layout from "@components/Layout";

const ResourcesPage = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <Layout title={frontmatter.title}>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
};

export default ResourcesPage;

ResourcesPage.propTypes = {
  data: PropTypes.object,
};

export const pageQuery = graphql`
  {
    markdownRemark(frontmatter: { path: { eq: "/resources/" } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        author
      }
    }
  }
`;
