import React from "react";

// Components
import Layout from "../components/layout/layout.js";
import Button from "../components/button/button.js";
import EventsDeck from "../components/eventsDeck/eventsDeck.js";

import "../styles/index/index.css";
import NetAnimation from "../components/netAnimation/netAnimation.js";

export default () => (
    <Layout title="Home">
        {/* <NetAnimation vantaRef="#netAnimation"> */}
        <header id="netAnimation">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-9 header-about">
                        <h1>Welcome to CyberSoc</h1>
                        <p>
                            Are you interested in learning how to use cryptography to encrypt your
                            messages, curious about the plethora of vulnerabilities on the web, or
                            want to hack electronic equipment?
                        </p>
                        <p>We're the society for you!</p>
                        <Button
                            className="btn-join btn-hollow bold"
                            href="https://yusu.org/activities/view/cybersoc"
                            target="_blank"
                            rel="noopener noreferrer">
                            Join us!
                        </Button>
                    </div>
                </div>
            </div>
        </header>
        {/* </NetAnimation> */}

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
                            Like all the cool kids nowadays, we have a Discord server! We use it to
                            communicate updates about the society, details about upcoming workshops,
                            and just chat about any cyber security stuff we find interesting. Join
                            the conversation by clicking the button below!
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
