import React from "react";
import { Helmet } from "react-helmet";

// Custom Components
import Navbar from "./navbar";
import Footer from "./footer";

import "../styles/components/layout.scss";

export default (props) => (
	<div className="site">
		<Helmet>
			<title>{props.title} / CyberSoc York</title>
			{/* Add SEO, og:graph and any other metadata stuff in here */}

			<meta charset="utf-8" />
			<meta name="description" content={props.description} />
			<meta name="keywords" content="CyberSoc, York, cyber, security, programming" />
			<meta name="author" content="Ben Silverman" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />

			<meta property="og:title" content={`${props.title} / CyberSoc York`} />
			<meta property="og:description" content={props.description} />
			<meta property="og:locale" content="en_GB" />
			<meta property="og:site_name" content="CyberSoc York" />
		</Helmet>
		<Navbar />
		<div className="content">{props.children}</div>
		<Footer />
	</div>
);
