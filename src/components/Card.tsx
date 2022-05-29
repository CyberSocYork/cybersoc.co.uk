import React from "react";
import ReactHtmlParser from "react-html-parser";
import sanitizeHtml from "sanitize-html";

import styled from "styled-components";

import { color } from "~/theme/config";

import cardImg from "~/img/card_img.jpg";

const StyledCard = styled.div`
  background-color: ${color.secondary};
  border-radius: 5px;
  overflow: hidden;
`;

const Body = styled.div`
  padding: 1em;
`;

const Title = styled.h2`
  font-size: 1rem;
  margin-bottom: 0.5em;
`;

const Detail = styled.h3`
  color: ${color.accent};
  font-size: 0.8rem;
  font-weight: 300;
  text-transform: uppercase;
  margin-bottom: 0.5em;
`;

const Description = styled.p`
  margin-bottom: 0;
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: center;
`;

type CardProps = {
  title: string;
  detail: string;
  desc: string;
  style: {
    [key: string]: string;
  };
};

export const Card = ({ title = "Title", detail, desc }: CardProps) => (
  <StyledCard>
    <Image src={cardImg} alt="CyberSoc members and the society banner" />
    <Body>
      <Title>{title}</Title>
      {detail ? <Detail>{detail}</Detail> : null}
      {desc ? <Description>{ReactHtmlParser(sanitizeHtml(desc))}</Description> : null}
    </Body>
  </StyledCard>
);
