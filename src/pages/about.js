import React from "react";

// Components
import Navbar from "../components/navbar/navbar.js";

export default () => (
	<div>
		<Navbar />
		<div class="container">
			<div class="row my-5" id="about">
				<div class="col">
					<h1>About CyberSoc</h1>
					<p>
						We are the University of York's Cyber Security Society. The society was
						started in December 2017 by a group of computer science undergraduates with
						a passion for cyber security. Have you ever been curious about the secret
						lives of hackers? Do you want to learn about how to secure or exploit
						computers for fun and profit? CyberSoc is the place for you! We’re a
						dedicated bunch of enthusiasts and learners, with a range of fun activities
						for beginners and veterans of cyber security alike. Come along to one of our
						workshops to learn how to properly secure your personal devices, disappear
						from the internet, or even compete in hacking competitions!
					</p>
				</div>
			</div>
			<div class="row my-5" id="committee">
				<div class="col">
					<h2>The Committee</h2>
					<div class="committee-grid">
						{/* TODO: Fill will divs for each committee member. Need to style with CSS grid! Could also create components for committee members? */}
					</div>
				</div>
			</div>
		</div>
	</div>
);
