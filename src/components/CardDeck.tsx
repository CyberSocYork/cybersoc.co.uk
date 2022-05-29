import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledCardDeck = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(
    auto-fill,
    minmax(300px, 1fr)
  ); // Fill with cards min-width 300px and max-wdith 1 fraction.
  grid-auto-rows: auto;
`;

export const CardDeck = ({ children }) => <StyledCardDeck>{children}</StyledCardDeck>;

CardDeck.propTypes = {
  children: PropTypes.node,
};
