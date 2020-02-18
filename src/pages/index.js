import React from "react";

// Components
import Navbar from "../components/navbar/navbar.js";
import Button from "../components/button/button.js";
import Card from "../components/card/card.js";
import CardDeck from "../components/cardDeck/cardDeck.js";

import "../styles/index.css";

export default () => (
	<div>
		<Navbar />
		<header>
			<div class="container">
				<div class="row">
					<div class="col-12 col-lg-9 header-about">
						<h1>Welcome to CyberSoc</h1>
						<p>
							Are you interested in learning how to use cryptography to encrypt your
							messages, curious about the plethora of vulnerabilities on the web, or
							want to hack electronic equipment?
						</p>
						<p>We're the society for you!</p>
						<Button
							className="btn-join btn-hollow bold"
							href="https://yusu.org/activities/view/cybersoc"
							target="_blank"
							rel="noopener noreferrer">
							Join us!
						</Button>
					</div>
				</div>
			</div>
		</header>

		<section id="calendar">
			<div class="container">
				<div class="row">
					<div class="col-12">
						<h2>Our Events</h2>
					</div>
				</div>
				<div class="row">
					<div class="col">
						<CardDeck>
							<Card title="this" />
							<Card title="is" />
							<Card title="a" />
						</CardDeck>
					</div>
				</div>
			</div>
		</section>

		{/* Discord */}
		<section id="discord-hero">
			<div class="container">
				<div class="row">
					<div class="col-12 col-lg-10">
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
							<a
								href="https://www.facebook.com/pg/cybersocyork"
								target="_blank"
								rel="noopener noreferrer">
								Facebook page!
							</a>
						</p>
						<Button
							className="btn-hollow btn-dc bold"
							href="http://bit.ly/CyberSocDiscord"
							target="_blank"
							rel="noopener noreferrer">
							Join the Discord
						</Button>
					</div>
				</div>
			</div>
		</section>
	</div>
);
