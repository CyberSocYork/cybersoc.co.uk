import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { format } from "date-fns";

import CardDeck from "./CardDeck";
import Card from "./Card";

const EventsDeck = () => {
  const {
    allEvents: { events },
  } = useStaticQuery(graphql`
    {
      allEvents {
        events: edges {
          node {
            id
            title
            description
            datetime
          }
        }
      }
    }
  `);

  const formatTimeLocation = (datetime, location) => {
    if (!datetime) return location;

    const date = format(new Date(datetime), "dd/MM/yyyy");

    return location ? [location, date].join(" - ") : date;
  };

  const items = events?.map(({ node }) => {
    return (
      <Card
        title={node.title}
        desc={node.description}
        detail={formatTimeLocation(node.datetime, node.location)}
        key={node.id}
        style={{ height: "100%" }}
      />
    );
  });

  return <CardDeck>{items}</CardDeck>;
};

export default EventsDeck;
