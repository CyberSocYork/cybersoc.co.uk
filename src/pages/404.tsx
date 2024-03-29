import React from "react";

import { Layout, TextLink, Particles } from "~/components";

const NotFoundPage = () => {
  return (
    <Layout title="Page Not Found">
      <div className="container">
        <div className="row my-5">
          <div className="col-12">
            <h1>Page not found</h1>
            <p>
              Oops! That page doesn&apos;t exist. Double check the URL to make sure it&apos;s
              correct, otherwise you can return to the homepage <TextLink to="/">here</TextLink>.
            </p>
          </div>
        </div>
        <div className="row my-5" style={{ position: "relative", minHeight: 300 }}>
          <Particles />
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
