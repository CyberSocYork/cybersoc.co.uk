import React from "react";

// Components
import Navbar from "../components/navbar/navbar.js";
import Button from "../components/button/button.js";

import "../styles/index.css";

// Icons
import { FaDiscord } from "react-icons/fa";

export default () => (
	<div>
		<Navbar />
		<header>
			<div class="container">
				<div class="row">
					<div class="col-12 col-md-8 col-lg-10 header-about">
						<h1>Welcome to CyberSoc</h1>
						<p>
							Are you interested in learning how to use cryptography to encrypt your
							messages, curious about the plethora of vulnerabilities on the web, or
							want to hack electronic equipment?
						</p>
						<p>We're the society for you!</p>
						<Button
							className="btn-join bold"
							href="https://yusu.org/activities/view/cybersoc">
							Join us!
						</Button>
					</div>
				</div>
			</div>
		</header>

		{/* Discord */}
		<section id="discord-hero">
			<div class="container">
				<div class="row">
					<div class="col-12 offset-md-1 col-md-10 offset-lg-0 col-lg-10">
						<h2>Discord</h2>
						<p>
							Like all the cool kids nowadays, we have a Discord server! We use it to
							communicate updates about the society, details about upcoming workshops,
							and just chat about any cyber security stuff we find interesting. Join
							the conversation by clicking the button below!
						</p>

						<p>
							If you'd rather not join the server, don't worry; we'll still send any
							information out via the mailing list and our{" "}
							<a target="_blank" href="https://www.facebook.com/pg/cybersocyork">
								Facebook page!
							</a>
						</p>
					</div>
					<div class="col-12 offset-md-1 col-md-10 offset-lg-0 col-lg-10 btn-dc-parent">
						<Button
							className="btn-dc"
							target="_blank"
							href="http://bit.ly/CyberSocDiscord">
							<FaDiscord />
						</Button>
					</div>
				</div>
			</div>
		</section>

		{/* <section id="calendar">
			<div class="container">
				<div class="row">
					<div class="col-12">
						<h1>Our Events</h1>
					</div>
				</div>
				<div class="row">
					<div class="col">
						<CardDeck>
							<Card title="this" />
							<Card title="is" />
							<Card title="a" />
							<Card title="test" />
							<Card title="event" />
							<Card title="calendar" />
						</CardDeck>
					</div>
				</div>
			</div>
		</section> */}
	</div>
);
