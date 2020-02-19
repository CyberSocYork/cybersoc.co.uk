import React from "react";
import { Helmet } from "react-helmet";

// Components
import Navbar from "../components/navbar/navbar.js";
import CommitteeCard from "../components/committeeCard/committeeCard.js";

import "../styles/about/about.css";

export default () => (
	<div>
		<Helmet>
			<title>About / York CyberSoc</title>
		</Helmet>
		<Navbar />
		<div className="container">
			<div className="row my-5" id="about">
				<div className="col">
					<h1>About Us</h1>
					<p>CyberSoc is the University of York's Cyber Security Society.</p>
					<p>
						The society was started in December 2017 by a group of computer science
						undergraduates with a passion for cyber security. If you've ever been
						curious about the secret lives of hackers, or wanted to learn about how to
						secure or exploit computers for fun and profit then CyberSoc is the place
						for you!
					</p>
					<p>
						We’re a dedicated bunch of enthusiasts and learners, with a range of fun
						activities for beginners and veterans of cyber security alike. Come along to
						one of our workshops (weekly, on Wednesdays) to learn how to properly secure
						your personal devices, disappear from the internet, or even compete in
						hacking competitions!
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
						<CommitteeCard
							name="Tom O'Neill"
							role="President"
							desc="Responsible for leading the society and chairing committee meetings."
						/>
						<CommitteeCard
							name="Jamie Quigley"
							role="Secretary"
							desc="Minutes committee meetings, ensure society admin is in order, and that the committee are carrying out their roles"
						/>
						<CommitteeCard
							name="David Miall"
							role="Treasurer"
							desc="Manages the societies finances, including buying of new hardware and ensuring that society membership is paid."
						/>
						<CommitteeCard
							name="Joe Wrieden"
							role="Events Officer"
							desc="Coordinates with the president to put on events and plan the timetable of society workshops and socials."
						/>
						<CommitteeCard
							name="Ben Silverman"
							role="Press & Publicity Officer"
							desc="Responsible for sending society emails, operating society social media and organising society merchandise."
						/>
						<CommitteeCard
							name="Asim Poptani"
							role="Sysadmin"
							desc="Responsible for coordinating the society's equipment acquisitions with the treasurer and maintaining the website and other systems necessary for the smooth running of workshops."
						/>
						<CommitteeCard
							name="Alex Harvey"
							role="Outreach Officer"
							desc="A non-CS student, responsible for expanding the reach of the society to other departments."
						/>
						<CommitteeCard 
							name="Alex Cook"
							role="Officer without Portfolio" 
							desc="Assists with any non role-specific society jobs and provides feedback during committee meetings." />
						<CommitteeCard
							name="Andy Chapman"
							role="Officer without Portfolio"
							desc="Assists with any non role-specific society jobs and provides feedback during committee meetings."
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
);
