import React from "react";

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

type CommitteeCardProps = {
  name: string;
  role: string;
  desc?: string;
  image?: string;
};

export const CommitteeCard = ({ name, role, desc, image }: CommitteeCardProps) => (
  <StyledCard>
    <Image alt={`Committee member ${name}`} src={image || "/committee-photos/placeholder.png"} />
    <Name>{name}</Name>
    <Role>{role}</Role>
    <Description>{desc || ""}</Description>
  </StyledCard>
);
