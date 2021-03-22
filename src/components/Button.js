import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import styled from "styled-components";

import { color } from "@theme/config";

const StyledButton = styled(Link)`
  background-image: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0) 50%,
    white 50%,
    white 50%
  );

  background-size: 200%;

  border: 5px solid white;
  display: inline-block;
  font-weight: 700;
  margin: 0;
  padding: 0.5em 1.2em;
  text-align: center;
  text-decoration: none !important;
  transition: background-position 0.3s, ease-in-out all 0.175s;

  &:hover {
    color: ${color.primary};
    background-position: -100% 100%;
  }
`;

const Button = ({ to, children, className }) => {
  // Test whether the link is internal (i.e. starts with a slash).
  const isInternal = /^\/(?!\/)/.test(to);

  if (isInternal) {
    return (
      <StyledButton to={to} className={className}>
        {children}
      </StyledButton>
    );
  }

  return (
    <StyledButton as="a" href={to} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </StyledButton>
  );
};

export const SmallButton = styled(Button)`
  padding: 0.3em 1em;
`;

Button.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Button;
