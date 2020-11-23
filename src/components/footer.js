import React from "react";
import { Link } from "gatsby";

import "../styles/components/footer.scss";
import { FaTwitter, FaFacebookF, FaDiscord } from "react-icons/fa";

export default () => (
  <footer>
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-10">
          <p>© 2020 Ben Silverman</p>
          <a
            href="https://twitter.com/CyberSocYork"
            className="footer-social"
            target="_blank"
            rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a
            href="https://facebook.com/CyberSocYork"
            className="footer-social"
            target="_blank"
            rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a
            href="https://bit.ly/CyberSocDiscord"
            className="footer-social"
            target="_blank"
            rel="noopener noreferrer">
            <FaDiscord />
          </a>
        </div>
        <div className="col-12 col-md-2">
          <ul className="footer-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/contact/">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);
