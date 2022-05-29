import React from "react";
import styled from "styled-components";
import TSParticles from "react-tsparticles";

import { breakpoint } from "../theme/config";

const Wrapper = styled(TSParticles)`
  display: none;

  ${breakpoint.md} {
    width: 100%;
    height: 100%;
    position: absolute;
    margin: 0;
    padding: 0;
    top: 0;
    left: 0;
    z-index: -1;
    display: block;
  }
`;

const Particles = () => (
  <Wrapper
    options={{
      particles: {
        number: {
          density: {
            enable: true,
            area: 900,
          },
          value: 80,
        },
        links: {
          color: "#ffffff",
          distance: 200,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        size: {
          value: 3,
        },
        opacity: {
          value: 0.5,
        },
        move: {
          enable: true,
          speed: 0.5,
          outMode: "bounce",
        },
        fpsLimit: 60,
      },
    }}
  />
);

export default Particles;
