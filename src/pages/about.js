import React from "react";

// Components
import Navbar from "../components/navbar/navbar.js";

export default () => (
	<div>
		<Navbar />
		<div className="container">
			<div className="row my-5" id="about">
				<div className="col">
					<h1>About Us</h1>
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
			<div className="row my-5" id="committee">
				<div className="col">
					<h2>The Committee</h2>
					<p>
						Our committee are the backbone of CyberSoc, responsible for organising &
						running weekly events, as well as managing the day-to-day activities of the
						society.
					</p>
					<div className="committee-grid">
						{/* TODO: Fill will divs for each committee member. Need to style with CSS grid! Could also create components for committee members? */}
					</div>
				</div>
			</div>
		</div>
	</div>
);
