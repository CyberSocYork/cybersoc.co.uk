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
		</Helmet>
		<Navbar />
		<div className="content">{props.children}</div>
		<Footer />
	</div>
);
