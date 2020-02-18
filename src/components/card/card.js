import React from "react";
import "./card.css";

export default (props) => (
	<div class="card">
		<h2 class="card-title">{props.title ? props.title : "Title"}</h2>
		<h3 class="card-detail">{props.detail ? props.detail : "Time and place"}</h3>
		<p class="card-desc">{props.desc ? props.desc : "Description"}</p>
	</div>
);