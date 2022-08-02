import React from "react";

import styled, { keyframes } from "styled-components";

/* 
  FadeIn Wrapper Component
  https://www.joshwcomeau.com/snippets/react-components/fade-in/
*/

const fadeIn = keyframes`
  from {
    opacity: 0;
  } to {
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  @media (prefers-reduced-motion: no-preference) {
    animation-name: ${fadeIn};
    animation-fill-mode: backwards;
  }
`;

type FadeInProps = {
  duration: number;
  delay: number;
  children: React.ReactNode;
  style: object;
};

export const FadeIn = ({ duration = 300, delay = 0, children, ...props }: FadeInProps) => {
  return (
    <Wrapper
      {...props}
      style={{
        ...(props.style || {}),
        animationDuration: `${duration}ms`,
        animationDelay: `${delay}ms`,
      }}>
      {children}
    </Wrapper>
  );
};
