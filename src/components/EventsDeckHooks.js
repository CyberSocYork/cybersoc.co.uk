import React, { useState } from "react";
import { format } from "date-fns";

import CardDeck from "./CardDeck";
import Card from "./Card";

import axios from "axios";

const EventsDeckHooks = async () => {
  const [data, setData] = useState([{}]);

  const URL = "https://cybersoc-event-server.herokuapp.com/events";
  const params = {
    method: "get",
    url: URL,
    headers: {
      "content-type": "application/json; charset=UTF-8",
    },
  };

  const res = await axios(params);
  const events = res.data;

  console.log("Axios:", events);

  if (events.length === 0) {
    setData([
      {
        title: "No events found.",
        description:
          "Oops! No events were returned from our Google Calendar. Chances are that's because we aren't running anything at the moment. If you think this is an error, however, please contact a member of our committee.",
      },
    ]);
  } else {
    setData({events});
  }

  const formatTimeLocation = (datetime, location) => {
    if (!datetime) return location;

    console.log(datetime);

    const date = format(new Date(datetime), "dd/MM/yyyy");

    return location ? [location, date].join(" - ") : date;
  };

  const items = data.map((item) => {
    return (
      <Card
        title={item.title}
        desc={item.description}
        detail={formatTimeLocation(item.datetime, item.location)}
        key={data.indexOf(item)}
      />
    );
  });

  console.log("Items: ", items);

  return <CardDeck>{items}</CardDeck>;
};

export default EventsDeckHooks;
