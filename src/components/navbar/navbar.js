import React from "react";
import { Link } from "gatsby";

import "./navbar.css";

// Images
import logo from "../../img/Logo.png";

export default () => (
	<nav class="navbar">
		<div class="container">
			{/* Links to index.js */}
			<Link to="/" className="navbar-brand">
				<img class="nav-image" src={logo} />
				CyberSoc
			</Link>
			<ul class="navbar-nav">
				<li class="nav-item">
					<Link className="nav-link" to="/about/">
						About
					</Link>
				</li>
				{/*
				<li class="nav-item">
					<a class="nav-link" href="#">
						Contact
					</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#">
						Events
					</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#">
						CTFs
					</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#">
						Resources
					</a>
				</li> */}
				<li class="nav-item">
					<a class="nav-link btn" target="_blank" href="http://bit.ly/CyberSocDiscord">
						Join us!
					</a>
				</li>
			</ul>
		</div>
	</nav>
);
