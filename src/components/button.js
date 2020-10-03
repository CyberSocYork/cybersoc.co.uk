import React from "react";
import { Link } from "gatsby";

import "../styles/components/button.scss";

export default (props) => {
    if (props.isLocal) {
        return (
            <Link
                className={`btn ${props.className ? props.className : ""}`}
                to={props.to}
                target={props.target ? props.target : ""}
                rel="noopener noreferrer">
                {props.children}
            </Link>
        );
    } else {
        return (
            <a
                className={`btn ${props.className ? props.className : ""}`}
                href={props.href}
                target={props.target ? props.target : ""}
                rel="noopener noreferrer">
                {props.children}
            </a>
        );
    }
};
