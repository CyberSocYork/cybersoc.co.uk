import React from "react";
import "./button.css";

// Need a way of
export default (props) => (
	<a class={`btn ${props.className}`} href={props.href} target={props.target ? props.target : ""}>
		{props.children}
	</a>
);
