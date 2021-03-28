import React from 'react';
import { Switch, Route } from "react-router";

import About from "../components/pages/About";

export default (props) => (
  <div className="">
    <Switch>
      <Route path="/about" component={About} />
      <Route from="*" to="/" />
    </Switch>
  </div>
)