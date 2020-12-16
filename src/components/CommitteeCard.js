import React from "react";
import "../styles/components/committeeCard.scss";

const CommitteeCard = ({name, role, desc, image}) => (
  <div className="committee-card">
    <img
      className="committee-image"
      alt={`Committee member ${name}`}
      src={image || "/committee-photos/placeholder.png"}
    />
    <h2 className="committee-name">{name || "Name"}</h2>
    <h3 className="committee-role">{role || "Role"}</h3>
    <p className="committee-desc">{desc || "Description"}</p>
  </div>
);

export default CommitteeCard;
