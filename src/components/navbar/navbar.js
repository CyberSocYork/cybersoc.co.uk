import React from "react";
import { Link } from "gatsby";

import "./navbar.css";

// Images
import logo from "../../img/Logo.png";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

export default () => (
	<nav className="navbar">
		<div className="container">
			{/* Links to index.js */}
			<Link to="/" className="navbar-brand bold">
				<img className="nav-image" src={logo} />
				CyberSoc
			</Link>
			<ul className="navbar-nav">
				<li className="nav-item">
					<Link className="nav-link" to="/about/">
						About
					</Link>
				</li>
				{/*
				<li className="nav-item">
					<a className="nav-link" href="#">
						Contact
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#">
						Events
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#">
						CTFs
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#">
						Resources
					</a>
				</li> */}
				<li className="nav-item">
					<a
						className="nav-link nav-social nav-tw"
						href="https://twitter.com/cybersocyork"
						target="_blank"
						rel="noopener noreferrer">
						<FaTwitter />
					</a>
				</li>
				<li className="nav-item">
					<a
						className="nav-link nav-social nav-fb"
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
