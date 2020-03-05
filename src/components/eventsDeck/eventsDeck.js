import React from "react";

import CardDeck from "../cardDeck/cardDeck.js";
import Card from "../card/card.js";

const fetch = require("node-fetch");

class EventsDeck extends React.Component {
	constructor() {
		super();
		this.state = {
			data: [],
		};
	}

	componentDidMount() {
		let url = "http://localhost:3000/events";
		let params = {
			headers: {
				"content-type": "application/json; charset=UTF-8",
			},
			method: "GET",
		};

		fetch(url, params)
			.then((res) => res.json())
			.then((res) =>
				this.setState({
					data: res,
				}),
			);
		console.log(this.state.items);
	}

	render() {
		const items = this.state.data.map((item) => {
			return <Card title={item.title} desc={item.description} d detail={item.location} />;
		});

		return <CardDeck>{items}</CardDeck>;
	}
}

export default EventsDeck;
