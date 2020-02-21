import React from "react";
import "./button.css";

// Need a way of
export default (props) => (
	<a
		class={`btn ${props.className}`}
		href={props.href}
		target={props.target ? props.target : ""}
		rel={props.rel ? props.rel : ""}
		onfocus={props.onfocus ? props.onfocus : ""}>
		{props.children}
	</a>
);
