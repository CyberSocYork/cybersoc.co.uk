import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { format } from "date-fns";

import { CardDeck } from "./CardDeck";
import { Card } from "./Card";

type EventT = {
  id: string;
  title: string;
  description: string;
  datetime: string;
  location: string;
};

export const EventsDeck = () => {
  const {
    allEvents: { events },
  }: { allEvents: { events: Array<{ node: EventT }> } } = useStaticQuery(graphql`
    {
      allEvents {
        events: edges {
          node {
            id
            title
            description
            datetime
            location
          }
        }
      }
    }
  `);

  const formatTimeLocation = (datetime: string, location: string) => {
    if (!datetime) return location;

    const date = format(new Date(datetime), "dd/MM/yyyy");

    return location ? [location, date].join(" - ") : date;
  };

  const items = events.map(
    ({ node: { title, description, datetime, location, id } }: { node: EventT }) => {
      return (
        <Card
          title={title}
          desc={description}
          detail={formatTimeLocation(datetime, location)}
          key={id}
          style={{ height: "100%" }}
        />
      );
    },
  );

  return <CardDeck>{items}</CardDeck>;
};
