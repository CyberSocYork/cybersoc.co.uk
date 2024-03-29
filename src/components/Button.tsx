import React from "react";
import { Link } from "gatsby";

import styled from "styled-components";

import { color } from "~/theme/config";

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
  transition: ease background-position 0.3s, ease all 0.175s;

  &:hover {
    color: ${color.primary};
    background-position: -100% 100%;
  }
`;

type ButtonProps = {
  className?: string;
  to: string;
  children: React.ReactNode;
};

export const Button = ({ to, children, className }: ButtonProps) => {
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
