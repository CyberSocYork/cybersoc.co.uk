import React from "react";

// Components
import Navbar from "../components/navbar/navbar.js";
import Button from "../components/button/button.js";
import Card from "../components/card/card.js";
import CardDeck from "../components/cardDeck/cardDeck.js";

import "../styles/index.css";

export default () => (
	<div>
		<Helmet>
			<title>Home / York CyberSoc</title>
		</Helmet>
		<Navbar />
		<header>
			<div className="container">
				<div className="row">
					<div className="col-12 col-lg-9 header-about">
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
			<div className="container">
				<div className="row">
					<div className="col-12">
						<h2 className="section-header">Events</h2>
					</div>
				</div>
				<div className="row">
					<div className="col">
						<CardDeck>
							<Card
								title="An introduction to Linux"
								detail="PZA/106X - 18:30"
								desc="All aboard the Linux train! Ever wondered how to use Linux in your cyber security escapades? Want to learn some super useful commands and the basics surrounding the operating system? Fear not! Jamie (our Secretary) is here with a presentation on all of that and more!"
							/>
							<Card
								title="OSINT with Andy"
								detail="PZA/124 - 18:30"
								desc={
									"This week's workshop is being run by our \"Officer with Sign\", Andy! He's prepared a presentation explaining the techniques and tricks used with performing OSINT (Open Source INTelligence, for those that didn't know). Prepare for an evening of (consensual) Facebook stalking and hardcore Googling!"
								}
							/>
							<Card
								title="Playing with partitions"
								detail="PZA/124 - 18:30"
								desc="This week's wonderful Wednesday workshop is being run by our committee member Alex! He'll be doing a session on hiding data in filesystems, and playing around with partitions. As usual, we'll be holding the workshop in PZA/124 at 18:30 on Wednesday, and we'd love to see you there!"
							/>
						</CardDeck>
					</div>
				</div>
			</div>
		</section>

		{/* Discord */}
		<section id="discord-hero">
			<div className="container">
				<div className="row">
					<div className="col-12 col-lg-10">
						<h2 className="section-header">Discord</h2>
						<p>
							Like all the cool kids nowadays, we have a Discord server! We use it to
							communicate updates about the society, details about upcoming workshops,
							and just chat about any cyber security stuff we find interesting. Join
							the conversation by clicking the button below!
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
