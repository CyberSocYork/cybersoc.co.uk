import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Layout } from "~/components";

import { color } from "~/theme/config";

const Title = styled.h1`
  margin-bottom: 0.5rem;
`;

const Detail = styled.h2`
  font-size: 0.8rem;
  font-weight: 300;
`;

const Date = styled.span`
  color: ${color.accent};
  text-transform: uppercase;
`;

const Content = styled.div`
  text-align: left;
  text-align-last: left;
`;

const ResourcesPage = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <Layout title={frontmatter.title}>
      <div className="container">
        <div className="row my-5">
          <div className="col">
            <Title>{frontmatter.title}</Title>
            <Detail>
              Last updated: <Date>{frontmatter.date}</Date>
            </Detail>
            <Content dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </div>
      </div>
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
