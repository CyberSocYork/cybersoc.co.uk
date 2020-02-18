import React from "react";
import { Link } from "gatsby";

import "./navbar.css";

// Images
import logo from "../../img/Logo.png";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

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
					<a
						class="nav-link nav-social"
						href="https://twitter.com/cybersocyork"
						target="_blank"
						rel="noopener noreferrer">
						<FaTwitter />
					</a>
				</li>
				<li class="nav-item">
					<a
						class="nav-link nav-social"
						href="https://facebook.com/cybersocyork"
						target="_blank"
						rel="noopener noreferrer">
						<FaFacebookF />
					</a>
				</li>
			</ul>
		</div>
	</nav>
);
