import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { color } from "~/theme/config";

const StyledCard = styled.div`
  text-align: center;
`;

const Image = styled.img`
  border-radius: 50%;
  width: 125px;
  height: 125px;
  margin-bottom: 1em;

  object-fit: cover;
  object-position: center top;
`;

const Name = styled.h2`
  font-size: 1rem;
`;

const Role = styled.h3`
  font-size: 1rem;
  color: ${color.accent};
  font-weight: lighter;
  text-transform: uppercase;
`;

const Description = styled.p``;

export const CommitteeCard = ({ name, role, desc, image }) => (
  <StyledCard>
    <Image alt={`Committee member ${name}`} src={image || "/committee-photos/placeholder.png"} />
    <Name>{name}</Name>
    <Role>{role}</Role>
    <Description>{desc || ""}</Description>
  </StyledCard>
);

CommitteeCard.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  desc: PropTypes.string,
  image: PropTypes.string,
};
