import React from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";

class netAnimation extends React.Component {
	constructor(props) {
		super(props);
		this.vantaRef = React.createRef();
	}

	componentDidMount() {
		this.vantaEffect = NET({
			el: this.vantaRef.current,
			THREE: THREE,
			mouseControls: true,
			touchControls: true,
			minHeight: 100,
			minWidth: 100,
			scale: 1.0,
			scaleMobile: 1.0,
			color: 0xa0a0a0,
			backgroundColor: 0x1d1d1d,
		});
	}

	componentWillUnmount() {
		if (this.vantaEffect) {
			this.vantaEffect.destroy();
		}
	}

	render() {
		return (
			<div className="netAnimation" ref={this.vantaRef}>
				{this.props.children}
			</div>
		);
	}
}

export default netAnimation;
