import React from "react";

import Layout from "@components/Layout";
import TextLink from "@components/TextLink";

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
      </div>
    </Layout>
  );
};

export default NotFoundPage;
