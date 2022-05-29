import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import styled from "styled-components";

import { color } from "~/theme/config";

const StyledLink = styled(Link)`
  color: ${color.white};
  font-weight: 700;
  outline: none;
  text-decoration: none;
  transition: all 0.175s ease;

  &:hover {
    color: ${color.accent};
  }
`;

const TextLink = ({ to, children, className }) => {
  // Test whether the link is internal (i.e. starts with a slash).
  const isInternal = /^\/(?!\/)/.test(to);

  if (isInternal) {
    return (
      <StyledLink to={to} className={className}>
        {children}
      </StyledLink>
    );
  }

  return (
    <StyledLink as="a" href={to} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </StyledLink>
  );
};

TextLink.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default TextLink;
