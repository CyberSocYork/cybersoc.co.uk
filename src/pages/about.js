import React from "react";
import PropTypes from "prop-types";

// Custom Components
import Layout from "../components/Layout";
import CommitteeCard from "../components/CommitteeCard";

import "../styles/pages/about.scss";

// Import committee information to be converted into displayable components.
import committee from "../components/committee";

let committeeMembers = committee.map(({ name, role, desc, image }, i) => {
  return <CommitteeCard name={name} role={role} desc={desc} image={image} key={i} />;
});

committeeMembers.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  desc: PropTypes.string,
  image: PropTypes.string,
};

const About = () => (
  <Layout title="About">
    <div className="container">
      <div className="row my-5" id="about">
        <div className="col">
          <h1>About Us</h1>
          <p>CyberSoc is the University of York&apos;s Cyber Security Society.</p>
          <p>
            The society was started in December 2017 by a group of computer science undergraduates
            with a passion for cyber security. If you&apos;ve ever been curious about the secret
            lives of hackers, or wanted to learn about how to secure or exploit computers for fun
            and profit then CyberSoc is the place for you!
          </p>
          <p>
            We&apos;re a dedicated bunch of enthusiasts and learners, with a range of fun activities
            for beginners and veterans of cyber security alike. Come along to one of our workshops
            (weekly, on Wednesdays) to learn how to properly secure your personal devices, disappear
            from the internet, or even compete in hacking competitions!
          </p>
        </div>
      </div>
      <div className="row my-5" id="committee">
        <div className="col">
          <h2>The Committee</h2>
          <p>
            Our committee are the backbone of CyberSoc, responsible for organising & running weekly
            events, as well as managing the day-to-day activities of the society.
          </p>
          <div className="committee-grid">{committeeMembers}</div>
        </div>
      </div>
    </div>
  </Layout>
);

export default About;
