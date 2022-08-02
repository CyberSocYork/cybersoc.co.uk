import React from "react";
import { Link } from "gatsby";

import styled from "styled-components";

import { color } from "~/theme/config";

const StyledLink = styled(Link)`
  color: ${color.text};
  font-weight: 700;
  outline: none;
  text-decoration: none;
  transition: all 0.175s ease;

  &:hover {
    color: ${color.accent};
  }
`;

type TextLinkProps = {
  to: string;
  children: React.ReactNode;
  className?: string;
};

export const TextLink = ({ to, children, className }: TextLinkProps) => {
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
