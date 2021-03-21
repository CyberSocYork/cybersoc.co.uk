import React from "react";
import Particles from "react-particles-js";
import styled from "styled-components";

// Components
import Layout from "../components/Layout";
import Button from "../components/Button";
import EventsDeck from "../components/EventsDeck";

import config from "../theme/config";
const { color, breakpoint } = config;

const JoinButton = styled(Button)`
  font-size: 1.5rem;

  background-image: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0) 50%,
    ${color.accent} 50%,
    ${color.accent} 50%
  );

  &:hover {
    border: 5px solid ${color.accent};
    color: ${color.primary};
  }

  ${breakpoint.md} {
    max-width: 250px;
  }
`;

const Header = styled.header`
  padding: 3em 0;
  position: relative;

  ${breakpoint.md} {
    padding: 5em 0;
  }
`;

const Hero = styled.div`
  display: flex;
  flex-direction: column;
`;

const SiteTitle = styled.h1`
  font-size: 3rem;

  ${breakpoint.md} {
    &::before {
      content: "> ";
      color: ${color.accent};
    }
  }
`;

const HeaderParticles = styled(Particles)`
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

const DiscordButton = styled(Button)`
  width: 100%;

  background-image: linear-gradient(
    90deg,
    ${color.primary} 0%,
    ${color.primary} 50%,
    ${color.blurple} 50%,
    ${color.blurple} 50%
  );

  &:hover {
    color: $white;
    border: 5px solid ${color.blurple};
  }

  ${breakpoint.md} {
    margin-top: 1em;
    max-width: 250px;
  }
`;

const Section = styled.section`
  margin: 3em 0;
`;

const SectionHeader = styled.h2`
  text-transform: lowercase;

  &::before {
    content: "> cat ";
    color: ${color.accent};
  }

  &::after {
    content: ".md";
  }
`;

const Index = () => (
  <Layout
    title="Home"
    description="Welcome to CyberSoc, the University of York's Cyber Security society! Visit our website to learn more about who we are and what we do.">
    <Header>
      <div className="container">
        <div className="row">
          <Hero className="col-12 col-lg-9">
            <SiteTitle>Welcome to CyberSoc</SiteTitle>
            <p>
              Are you interested in learning how to use cryptography to encrypt your messages,
              curious about the plethora of vulnerabilities on the web, or want to hack electronic
              equipment?
            </p>
            <p>We&apos;re the society for you!</p>
            <JoinButton to="https://yusu.org/activities/view/cybersoc">Join us!</JoinButton>
          </Hero>
        </div>
      </div>
      <HeaderParticles
        params={{
          particles: {
            number: {
              density: {
                enable: true,
                area: 900,
              },
              value: 60,
            },
            lineLinked: {
              enable: true,
              opacity: 0.4,
            },
            size: {
              value: 2,
            },
            move: {
              speed: 0.5,
            },
            fpsLimit: 60,
          },
        }}
      />
    </Header>

    {/* Events */}
    <Section id="calendar">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <SectionHeader>Events</SectionHeader>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <EventsDeck />
          </div>
        </div>
      </div>
    </Section>

    {/* Discord */}
    <Section id="discord-hero">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-10">
            <SectionHeader>Discord</SectionHeader>
            <p>
              Like all the cool kids nowadays, we have a Discord server! We use it to communicate
              updates about the society, details about upcoming workshops, and just chat about any
              cyber security stuff we find interesting. Join the conversation by clicking the button
              below!
            </p>
            <DiscordButton to="http://bit.ly/CyberSocDiscord">Join the Discord</DiscordButton>
          </div>
        </div>
      </div>
    </Section>
  </Layout>
);

export default Index;
