import React from "react";
import "./button.css";

// Need a way of
export default (props) => <a class={`btn ${props.className}`}>{props.children}</a>;
