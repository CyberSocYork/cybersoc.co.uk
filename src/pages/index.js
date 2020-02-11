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
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Sagittis id
							consectetur purus ut faucibus pulvinar elementum integer enim. In est
							ante in nibh mauris cursus mattis.
						</p>
						<div class="social-links">
							<Button className="btn-fb">
								<FaFacebookF />
							</Button>

							<Button className="btn-tw">
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
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam luctus
							eros et leo hendrerit, ac tristique ligula aliquam. Nullam laoreet ex
							vitae enim imperdiet molestie. Nulla at dignissim massa. Pellentesque
							lobortis purus eros, nec finibus nisl. Cras sed libero ligula.
							Pellentesque.
						</p>
					</div>
					<div class="col-12 offset-md-1 col-md-10 offset-lg-2 col-lg-8 btn-dc-parent">
						<Button className="btn-dc">
							<FaDiscord /> Join
						</Button>
					</div>
				</div>
			</div>
		</section>

		<section id="calendar">
			<div class="container">
				<div class="row">
					<div class="col-12">
						<h1>Our Events</h1>
					</div>
				</div>
				<div class="row">
					<div class="col">
						<CardDeck>
							<Card />
							<Card />
							<Card />
							<Card />
							<Card />
							<Card />
						</CardDeck>
					</div>
				</div>
			</div>
		</section>
	</Layout>
);
