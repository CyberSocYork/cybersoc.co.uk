import React from "react";
import "./navbar.css";

export default () => (
	<nav class="navbar">
		<div class="container">
			<a class="navbar-brand" href="https://cybersoc.co.uk">
				CyberSoc
			</a>
			<ul class="navbar-nav">
				{/* <li class="nav-item">
					<a class="nav-link" href="#">
						About
					</a>
				</li>
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
