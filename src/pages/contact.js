import React from "react";

import Button from "@components/Button";
import Layout from "@components/Layout";

const Contact = () => (
  <Layout title="Contact Us">
    <div className="container">
      <div className="row mt-5">
        <div className="col-12">
          <h1>Contact Us</h1>
          <p>
            Curious about when we meet? Want to find out more about what we do? If you have{" "}
            <em>any</em> questions at all, please don&apos;t hesitate to ask!
          </p>
          <p>
            You can get in touch with CyberSoc in lots of different ways. The easiest is to probably
            send an email our way; just click the button below! You can also always message us via{" "}
            <a
              href="https://www.messenger.com/t/123880538306787"
              target="_blank"
              rel="noopener noreferrer">
              Facebook Messenger
            </a>{" "}
            or{" "}
            <a href="https://twitter.com/CyberSocYork" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
            , too, and we&apos;ll do our best to reply as soon as possible.
          </p>
        </div>
      </div>
      <div className="row mt-1 mb-4">
        <div className="col-12">
          <Button className="btn-join btn-hollow bold" to="mailto:cyber@yusu.org">
            Email us
          </Button>
        </div>
      </div>
    </div>
  </Layout>
);

export default Contact;
