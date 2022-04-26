import React, { useState } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import "./App.scss";
import { PageNotFound } from "./common";
import Static from "./static";

const App: React.FC<any> = () => {
  const paths = {
    static: "/",
    coder: "/coder",
    test: "/test",
  };
  return (
    <>
      <h1>Title</h1>
      <Router>
        <Switch>
          <Route component={Static} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
