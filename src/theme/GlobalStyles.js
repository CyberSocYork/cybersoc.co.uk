import { createGlobalStyle } from "styled-components";
import "@fontsource/cabin/400.css";
import "@fontsource/cabin/700.css";

import config from "./config";
const { color } = config;

const GlobalStyles = createGlobalStyle`
html {
  font-size: 20px;
}

body {
  background-color: ${color.primary};
  color: ${color.text};
  font-family: "Cabin", Arial, Helvetica, sans-serif;
  font-weight: 400;
  margin: 0;
}

h1,
h2,
h3 {
  font-weight: 700;
  margin-bottom: 1rem;
}

h1,
h2,
h3,
p {
  margin-top: 0;
}

h1 {
  font-size: 2.5rem;
}

h2 {
  font-size: 2rem;
}

h3 {
  font-size: 1.75rem;
}

p {
  line-height: 1.3em;
}

a {
  color: ${color.text};
  font-weight: 700;
  outline: none;
  text-decoration: none;
  transition: all 0.175s ease-in-out;

  &:hover {
    color: ${color.accent};
  }
}

p > a {
  position: relative;

  &:before {
    content: "";
    position: absolute;
    width: 0%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: ${color.accent};
    visibility: hidden;
    transition: width 0.175s ease-in-out;
  }

  &:hover:before {
    visibility: visible;
    width: 100%;
  }
}

.bold {
  font-weight: 700;
}

hr {
  color: ${color.accent};
}
`;

export default GlobalStyles;
