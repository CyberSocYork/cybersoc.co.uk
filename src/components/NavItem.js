import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import TextLink from "./TextLink";

import { color, breakpoint } from "@theme/config";

const StyledNavItem = styled.li`
  margin-bottom: 1em;
  font-weight: 300;
  font-size: 1.5rem;

  &:nth-last-child(3) {
    margin-bottom: 0;
  }

  ${breakpoint.md} {
    font-size: 1rem;
    margin-bottom: 0;
    margin-right: 2em;

    &:last-child {
      margin-right: 0;
    }
  }
`;

const NavLink = styled(TextLink)`
  text-decoration: none;

  transition: all 0.175s ease;

  &:hover {
    color: ${({ hover }) => hover || color.accent};
  }
`;

const NavItem = ({ to, text, hover, className }) => {
  return (
    <StyledNavItem className={className}>
      <NavLink to={to} hover={hover}>
        {text}
      </NavLink>
    </StyledNavItem>
  );
};

export default NavItem;

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.node.isRequired,
  hover: PropTypes.string,
  className: PropTypes.string,
};
