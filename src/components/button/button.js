import React from "react";
import "./button.css";

// Need a way of
export default (props) => (
	<a
		className={`btn ${props.className}`}
		href={props.href}
		target={props.target ? props.target : ""}
		rel={props.rel ? props.rel : ""}>
		{props.children}
	</a>
);
