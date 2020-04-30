import React from "react";
import "./button.css";

export default (props) => (
    <a
        className={`btn ${props.className}`}
        href={props.href}
        target={props.target ? props.target : ""}
        rel="noopener noreferrer">
        {props.children}
    </a>
);
