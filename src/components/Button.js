import React from "react";
import { Link } from "gatsby";

import "../styles/components/button.scss";

const Button = ({ isLocal, className, to, href, target, style, children }) => {
  if (isLocal) {
    return (
      <Link
        className={`btn ${className ? className : ""}`}
        to={to}
        target={target ? target : ""}
        rel="noopener noreferrer"
        style={style}>
        {children}
      </Link>
    );
  } else {
    return (
      <a
        className={`btn ${className ? className : ""}`}
        href={href}
        target={target ? target : ""}
        rel="noopener noreferrer"
        style={style}>
        {children}
      </a>
    );
  }
};

export default Button;
