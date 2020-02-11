import React from "react";
import "./button.css";

// Need a way of
export default (props) => (
	<a class={`btn ${props.className}`} href={props.href}>
		{props.children}
	</a>
);
