import React from "react";
import Particles from "react-particles-js";

import "../styles/components/particlesBackground.scss";

export default ({ children }) => (
    <div>
        <Particles
            className="particlesWrapper"
            width="100%"
            height="100%"
            params={{
                particles: {
                    number: {
                        value: 50,
                    },
                    size: {
                        value: 3,
                    },
                },
            }}
        />
        {children}
    </div>
);
