import React from "react";
import "./navbar.css";

export default () => (
	<nav class="navbar">
		<div class="container">
			<a class="navbar-brand" href="https://google.com">
				CyberSoc
			</a>
			<ul class="navbar-nav">
				<li class="nav-item">
					<a class="nav-link" href="https://google.com">
						About
					</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="https://google.com">
						Contact
					</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="https://google.com">
						Events
					</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="https://google.com">
						CTFs
					</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="https://google.com">
						Resources
					</a>
				</li>
				<li class="nav-item">
					<a class="nav-link btn" href="https://google.com">
						Join us!
					</a>
				</li>
			</ul>
		</div>
	</nav>
);
