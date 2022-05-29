import React from "react";

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

type CardDeckProps = {
  children: React.ReactNode;
};

export const CardDeck = ({ children }: CardDeckProps) => (
  <StyledCardDeck>{children}</StyledCardDeck>
);
