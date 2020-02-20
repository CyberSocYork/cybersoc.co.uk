import React from "react";
import { Helmet } from "react-helmet";

import Navbar from "../components/navbar/navbar.js";
import Footer from "../components/footer/footer.js";

export default () => (
	<div>
		<Helmet>
			<title>Contact Us / York CyberSoc</title>
		</Helmet>
		<Navbar />
		<Footer />
	</div>
);
