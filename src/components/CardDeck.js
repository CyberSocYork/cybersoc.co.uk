import React from "react";
import PropTypes from "prop-types";

import "../styles/components/cardDeck.scss";

const CardDeck = ({ children }) => <div className="card-deck">{children}</div>;

CardDeck.propTypes = {
  children: PropTypes.element,
};

export default CardDeck;
