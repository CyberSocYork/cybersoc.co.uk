import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

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

Button.propTypes = {
  isLocal: PropTypes.bool,
  className: PropTypes.string.isRequired,
  to: PropTypes.string,
  href: PropTypes.string,
  target: PropTypes.string,
  style: PropTypes.string,
  children: PropTypes.element.isRequired,
};

export default Button;
