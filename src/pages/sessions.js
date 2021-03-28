import React from "react";

import Layout from "@components/Layout";

import sessionData from "@components/sessionData";
import SessionEntry from "../components/SessionEntry";

const sessions =
  sessionData && sessionData.map((session, i) => <SessionEntry {...session} key={i} />);

const SessionsPage = () => {
  return (
    <Layout title="Previous Sessions">
      <div className="container">
        <div className="row my-5">
          <div className="col">
            <h1>Previous Sessions</h1>
            {sessions}
            <p>Hello!</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SessionsPage;
