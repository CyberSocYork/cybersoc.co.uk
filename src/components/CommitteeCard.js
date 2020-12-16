import React from "react";
import PropTypes from "prop-types";

import "../styles/components/committeeCard.scss";

const CommitteeCard = ({ name, role, desc, image }) => (
  <div className="committee-card">
    <img
      className="committee-image"
      alt={`Committee member ${name}`}
      src={image || "/committee-photos/placeholder.png"}
    />
    <h2 className="committee-name">{name}</h2>
    <h3 className="committee-role">{role}</h3>
    <p className="committee-desc">{desc || ""}</p>
  </div>
);

CommitteeCard.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  desc: PropTypes.string,
  image: PropTypes.string,
};

export default CommitteeCard;
