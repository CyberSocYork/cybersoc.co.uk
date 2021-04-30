import React from "react";
import PropTypes from "prop-types";
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

export const FadeIn = ({ duration = 300, delay = 0, children, ...props }) => {
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

FadeIn.propTypes = {
  duration: PropTypes.number,
  delay: PropTypes.number,
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
};
