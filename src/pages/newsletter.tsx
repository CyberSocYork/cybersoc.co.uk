import React from "react";
import styled from "styled-components";

import { Layout, RegistrationForm } from "~/components";

import { color } from "~/theme/config";

const Details = styled.details`
  font-size: 16px;
  line-height: 1.5;
`;

const DetailSummary = styled.summary`
  color: ${color.accent};
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 1em;
`;

const Newsletter = () => {
  return (
    <Layout title="Newsletter">
      <div className="container">
        <div className="row mt-5 mb-2">
          <div className="col">
            <h1>Join the mailing list!</h1>
            <p></p>Hi! Thanks for joining our mailing list. Just fill out the details below and
            we&apos;ll keep you up to date with any and all CyberSoc-related news!
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Details>
              <DetailSummary>Disclaimer</DetailSummary>
              By completing this form you are giving consent for the student group to hold this data
              on file for the purposes of administering activities. This information is processed on
              a contract basis and the information will be retained on file. The society has agreed
              to adhere to YUSU&apos;s Data Protection & Information Security, for further
              information on how YUSU use student data and what your rights are can be found within
              the YUSU Student Data Privacy Statement on our website. If you have any queries please
              contact <b>dataprotection@yusu.org</b>.
            </Details>
          </div>
        </div>
        <div className="row mt-2 mb-5">
          <div className="col-12 col-md-7 col-lg-5">
            <RegistrationForm />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Newsletter;
