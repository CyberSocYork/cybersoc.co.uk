import React from "react";
import { Helmet } from "react-helmet";

import Navbar from "../components/navbar/navbar.js";
import Footer from "../components/footer/footer.js";
import Button from "../components/button/button.js";

import "../styles/contact/contact.css";

export default () => (
	<div class="site">
		<Helmet>
			<title>Contact Us / York CyberSoc</title>
		</Helmet>
		<Navbar />
		<div className="container content">
			<div className="row mt-5">
				<div class="col-12">
					<h1>Contact Us</h1>
					<p>
						Curious about when we meet? Want to find out more about what we do? If you
						have <em>any</em> questions at all, please don't hesitate to ask us!
					</p>
					<p>
						You can get in touch with CyberSoc in lots of different ways. The easiest is
						to probably send and email our way; just click the button below! You can
						also always message us via{" "}
						<a
							href="https://www.messenger.com/t/123880538306787"
							target="_blank"
							rel="noopener noreferrer">
							Facebook Messenger
						</a>{" "}
						or{" "}
						<a
							href="https://twitter.com/CyberSocYork"
							target="_blank"
							rel="noopener noreferrer">
							Twitter
						</a>
						, too, and we'll do our best to reply as soon as possible.
					</p>
				</div>
			</div>
			<div className="row">
				<div class="col-12">
					<Button
						className="btn-join btn-hollow bold"
						href="mailto:cyber@yusu.org"
						target="_blank"
						rel="noopener noreferrer">
						Email us
					</Button>
				</div>
			</div>
		</div>
		<Footer />
	</div>
);
