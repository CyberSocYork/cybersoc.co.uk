import React from "react";
import { Link } from "gatsby";

import "./navbar.css";

// Images
import logo from "../../img/Logo.png";
import { FaFacebookF, FaTwitter, FaBars } from "react-icons/fa";

function toggleMenu() {
	// Toggle the dropdown navbar's "active" state to be able to show and hide it.
	let navbar = document.getElementById("navbar-nav");
	navbar.classList.toggle("active");
}

export default () => (
	<nav className="navbar">
		<div className="container">
			<span class="navbar-toggle" id="js-navbar-toggle" onClick={toggleMenu}>
				<FaBars />
			</span>
			<Link to="/" className="navbar-brand bold">
				<img className="nav-image" alt="" src={logo} />
				CyberSoc
			</Link>
			<ul className="navbar-nav" id="navbar-nav">
				<li className="nav-item">
					<Link className="nav-link" to="/about/">
						About
					</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to="#">
						Resources
					</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to="/contact/">
						Contact
					</Link>
				</li>
				<li className="nav-item nav-social">
					<a
						className="nav-link nav-tw"
						href="https://twitter.com/cybersocyork"
						target="_blank"
						rel="noopener noreferrer">
						<FaTwitter />
					</a>
				</li>
				<li className="nav-item nav-social">
					<a
						className="nav-link nav-fb"
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
