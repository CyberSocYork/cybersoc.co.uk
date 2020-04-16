import React from "react";
import "./committeeCard.css";

export default (props) => (
    <div className="committee-card">
        <img
            className="committee-image"
            alt={`Committee member ${props.name}`}
            src={props.image || "/committee-photos/placeholder.png"}
        />
        <h2 className="committee-name">{props.name || "Name"}</h2>
        <h3 className="committee-role">{props.role || "Role"}</h3>
        <p className="committee-desc">{props.desc || "Description"}</p>
    </div>
);
