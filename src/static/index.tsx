import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import { PageNotFound } from "../common";
import Layout from "./layout";
import { TestLink, TestSubmitSuccess } from "./pages";

const Static: React.FC<any> = (props) => {
  const paths = {
    testLink: `/test-link/:testId`,
    testSubmitSuccess: "/test-submit/:submissionId",
  };

  return (
    <Layout>
      <Router>
        <Switch>
          <Route
            key={paths.testLink}
            path={paths.testLink}
            component={TestLink}
          />
          <Route
            key={paths.testSubmitSuccess}
            path={paths.testSubmitSuccess}
            component={TestSubmitSuccess}
          />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </Layout>
  );
};

export default Static;
