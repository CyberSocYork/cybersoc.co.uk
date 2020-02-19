import React from "react";
import "./committeeCard.css";

export default (props) => (
	<div className="committee-card">
		<img className="committee-image" src="https://via.placeholder.com/150" />
		<h2 className="committee-name">{props.name ? props.name : "Name"}</h2>
		<h3 className="committee-role">{props.role ? props.role : "Role"}</h3>
		<p className="committee-desc">{props.desc ? props.desc : "Description"}</p>
	</div>
);
