import React from "react";
import { Helmet } from "react-helmet";

// Custom Components
import Navbar from "./navbar.js";
import Footer from "./footer.js";

import "./layout.css";

export default (props) => (
	<div class="site">
		<Helmet>
			<title>{props.title} / CyberSoc York</title>
			{/* Add SEO, og:graph and any other metadata stuff in here */}
		</Helmet>
		<Navbar />
		<div className="content">{props.children}</div>
		<Footer />
	</div>
);
