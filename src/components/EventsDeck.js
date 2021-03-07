import React, { useState, useEffect } from "react";
import { format } from "date-fns";

import CardDeck from "./CardDeck";
import Card from "./Card";

import axios from "axios";

const EventsDeck = () => {
  const [events, setEvents] = useState([
    { title: "Fetching events...", description: "Loading..." },
  ]);

  const updateEvents = async () => {
    const res = await axios({
      method: "get",
      url: "https://cybersoc-event-server.herokuapp.com/events",
      headers: {
        "content-type": "application/json; charset=UTF-8",
      },
    });

    setEvents(res.data);
  };

  // On component mount, make a call to the event server to fetch the calendar events.
  useEffect(() => {
    updateEvents();
  }, []);

  const formatTimeLocation = (datetime, location) => {
    if (!datetime) return location;

    const date = format(new Date(datetime), "dd/MM/yyyy");

    return location ? [location, date].join(" - ") : date;
  };

  const items =
    events &&
    events.map((item) => {
      return (
        <Card
          title={item.title}
          desc={item.description}
          detail={formatTimeLocation(item.datetime, item.location)}
          key={events.indexOf(item)}
        />
      );
    });

  return <CardDeck>{items}</CardDeck>;
};

export default EventsDeck;
