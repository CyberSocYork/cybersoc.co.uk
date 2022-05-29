import React from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import styled from "styled-components";

// Custom Components
import Navbar from "./Navbar";
import Footer from "./Footer";
import GlobalStyles from "../theme/GlobalStyles";

import "../styles/bootstrap/grid.scss";

const Site = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const Content = styled.div`
  flex: 1;
`;

const Layout = ({ title, description, children }) => (
  <>
    <GlobalStyles />
    <Site>
      <Helmet>
        <title>{title} / CyberSoc York</title>
        {/* Add SEO, og:graph and any other metadata stuff in here */}

        <meta charset="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content="CyberSoc, York, cyber, security, programming" />
        <meta name="author" content="Ben Silverman" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:title" content={`${title} / CyberSoc York`} />
        <meta property="og:description" content={description} />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:site_name" content="CyberSoc York" />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/CyberSocYork/cybersocyork.github.io/gatsby/static/preview-min.jpg"
        />
      </Helmet>
      <Navbar />
      <Content>{children}</Content>
      <Footer />
    </Site>
  </>
);

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Layout;
