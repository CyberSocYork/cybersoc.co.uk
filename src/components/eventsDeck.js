import React from "react";

import CardDeck from "./cardDeck";
import Card from "./card";

import fetch from "node-fetch";

class EventsDeck extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [{}], // start data off as empty to load placeholder cards.
    };

    const url = "https://cybersoc-event-server.herokuapp.com/events";
    let params = {
      headers: {
        "content-type": "application/json; charset=UTF-8",
      },
      method: "GET",
    };

    fetch(url, params)
      .then((res) => res.json())
      .then((res) => {
        // If the event server doesn't return any data (i.e. there are no events), display an "error" card instead...
        if (res.length === 0) {
          this.setState({
            data: [
              {
                title: "No events found.",
                description:
                  "Oops, no events were returned from our Google Calendar. Chances are that's because we aren't running anything at the moment. If you think this is an error, however, please contact a member of our committee.",
              },
            ],
          });
        } else {
          // else load the data as expected.
          this.setState({
            data: res,
          });
        }
      });
  }

  formatTimeLocation(datetime, location) {
    let date = new Date(datetime);
    let day = date.getDate().toString().padStart(2, "0");
    let month = (date.getMonth() + 1).toString().padStart(2, "0");
    let year = date.getFullYear();

    // If any portion of the date returns "NaN", hide the date. Should only happen upon initial loading of the page.
    if ([day, month, year].some(isNaN)) {
      date = "";
    } else {
      date = [day, month, year].join("/");
    }

    return location ? [location, date].join(" - ") : date;
  }

  render() {
    const items = this.state.data.map((item) => {
      return (
        <Card
          title={item.title}
          desc={item.description}
          detail={this.formatTimeLocation(item.datetime, item.location)}
          key={this.state.data.indexOf(item)}
        />
      );
    });

    return <CardDeck>{items}</CardDeck>;
  }
}

export default EventsDeck;
