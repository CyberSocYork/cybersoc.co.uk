import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { color } from "@theme/config";

const StyledCard = styled.div`
  text-align: center;
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

const CommitteeCard = ({ name, role, desc, image }) => {
  console.log(image);

  return (
    <StyledCard>
      <GatsbyImage
        image={getImage(image)}
        alt={name}
        style={{
          borderRadius: "50%",
          width: 125,
          height: 125,
          marginBottom: "1em",
          objectFit: "cover",
          objectPosition: "center top",
        }}
      />
      <Name>{name}</Name>
      <Role>{role}</Role>
      <Description>{desc || ""}</Description>
    </StyledCard>
  );
};

CommitteeCard.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  desc: PropTypes.string,
  image: PropTypes.object,
};

export default CommitteeCard;
