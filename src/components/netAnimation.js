import React from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";

import "./netAnimation.css";

class netAnimation extends React.Component {
    constructor(props) {
        super(props);
        this.vantaRef = React.createRef();
    }

    componentDidMount() {
        this.vantaEffect = NET({
            el: this.vantaRef.current,
            THREE: THREE,
            mouseControls: false,
            touchControls: false,
            minHeight: 100,
            minWidth: 100,
            scale: 1.0,
            scaleMobile: 1.0,
            color: 0x707070,
            backgroundColor: 0x1d1d1d,
            points: 8,
            maxDistance: 25,
            spacing: 20,
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
