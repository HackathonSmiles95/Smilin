
import React from 'react';
import { Switch, Route } from "react-router";

import About from "../components/pages/About";
import Help from "../components/pages/Help";
import Partner from "../components/pages/Partner";
import Login from "../components/pages/Login";
import Register from "../components/pages/Register";

export default (props) => (
  <div className="">
    <Switch>
      <Route path="/about" component={About} />
      <Route path="/login" component={Login} />
      <Route path="/Help" component={Help} />
      <Route path="/partner" component={Partner} />
      <Route path="/register" component={Register} />
      <Route from="*" to="/" />
    </Switch>
  </div>
)