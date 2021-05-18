import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";

import Layout from "../components/Layout";

const SessionsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      sessions: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "*sessions.md" } }) {
        edges {
          node {
            html
          }
        }
      }
    }
  `);

  return (
    <Layout title="Previous Sessions">
      <h1>Hello, world!</h1>
      <div dangerouslySetInnerHTML={{ __html: data.sessions.html }}></div>
    </Layout>
  );
};

export default SessionsPage;

SessionsPage.propTypes = {
  data: PropTypes.object,
};
