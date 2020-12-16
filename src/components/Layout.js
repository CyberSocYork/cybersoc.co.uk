import React from "react";
import { Helmet } from "react-helmet";

// Custom Components
import Navbar from "./Navbar";
import Footer from "./Footer";

import "../styles/components/layout.scss";

const Layout = ({title, description, children}) => (
  <div className="site">
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
    <div className="content">{children}</div>
    <Footer />
  </div>
);

export default Layout;
