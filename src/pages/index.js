import React from "react";

// Components
import Navbar from "../components/navbar";
import Layout from "../components/layout";
import Button from "../components/button";
import CardDeck from "../components/cardDeck";
import Card from "../components/card";

// Images
import logo from "../img/Logo.png";

// Icons
import { FaFacebookF, FaTwitter, FaDiscord } from "react-icons/fa";

export default () => (
	<Layout>
		<Navbar />
		<header>
			<div class="container">
				<div class="row">
					<div class="offset-2 col-8 col-md-3 offset-md-1">
						<img class="header-image" src={logo} alt="CyberSoc Logo" />
					</div>
					<div class="col-12 col-md-7 header-about">
						<h1>Welcome to CyberSoc</h1>
						<p>
							CyberSoc is the University of York's Cyber Security society. We're a
							bunch of dedicated enthusiasts running weekly workshops for beginners
							and veterans alike! If you're interested in learning how to use
							cryptography to encrypt your messages, curious about the plethora of
							vulnerabilities on the web, or want to hack electronic equipment, then
							we're the society for you!
						</p>
						<div class="social-links">
							<Button className="btn-fb" href="http://facebook.com/cybersocyork">
								<FaFacebookF />
							</Button>

							<Button className="btn-tw" href="http://twitter.com/cybersocyork">
								<FaTwitter />
							</Button>
						</div>
					</div>
				</div>
			</div>
		</header>

		{/* Discord */}
		<section id="discord-hero">
			<div class="container">
				<div class="row">
					<div class="col-12 offset-md-1 col-md-10 offset-lg-2 col-lg-8">
						<h2>Join the Discord!</h2>
						<p>
							Like all the cool kids nowadays, we have a Discord server! We use it to
							communicate updates about the society, details about upcoming workshops,
							and just chat about any cyber security stuff we find interesting. Join
							the conversation by clicking the button below!
						</p>

						<p>
							If you haven't heard of Discord before, it's essentially a platform
							allowing groups to set up group chats with lots of different "channels"
							for different topics. This works great for societies like us, as we can
							have channels for loads of different topics! It's not essential to join
							the server, however, as we'll still send any information out via the
							mailing list and our{" "}
							<a target="_blank" href="https://www.facebook.com/pg/cybersocyork">
								Facebook page.
							</a>
						</p>
					</div>
					<div class="col-12 offset-md-1 col-md-10 offset-lg-2 col-lg-8 btn-dc-parent">
						<Button
							className="btn-dc"
							target="_blank"
							href="http://bit.ly/CyberSocDiscord">
							<FaDiscord /> Join
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
	</Layout>
);
