import React from "react";
import Particles from "react-particles-js";

// Components
import Layout from "../components/Layout";
import Button from "../components/Button";
import EventsDeck from "../components/EventsDeck";

import "../styles/pages/index.scss";

export default () => (
  <Layout
    title="Home"
    description="Welcome to CyberSoc, the University of York's Cyber Security society! Visit our website to learn more about who we are and what we do.">
    <header>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-9 header-about">
            <h1>Welcome to CyberSoc</h1>
            <p>
              Are you interested in learning how to use cryptography to encrypt your messages,
              curious about the plethora of vulnerabilities on the web, or want to hack electronic
              equipment?
            </p>
            <p>We&apos;re the society for you!</p>
            <Button
              className="btn-join bold"
              href="https://yusu.org/activities/view/cybersoc"
              target="_blank">
              Join us!
            </Button>
          </div>
        </div>
      </div>
      <Particles
        id="headerParticles"
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
    </header>

    <section id="calendar">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="section-header">Events</h2>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <EventsDeck />
          </div>
        </div>
      </div>
    </section>

    {/* Discord */}
    <section id="discord-hero">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-10">
            <h2 className="section-header">Discord</h2>
            <p>
              Like all the cool kids nowadays, we have a Discord server! We use it to communicate
              updates about the society, details about upcoming workshops, and just chat about any
              cyber security stuff we find interesting. Join the conversation by clicking the button
              below!
            </p>
            <Button
              className="btn-hollow btn-dc bold"
              href="http://bit.ly/CyberSocDiscord"
              target="_blank"
              rel="noopener noreferrer">
              Join the Discord
            </Button>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);
