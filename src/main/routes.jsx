import React from "react";
import { Switch, Route } from "react-router";

import Home from "../components/pages/Home";
import About from "../components/pages/About";
import Help from "../components/pages/Help";
import Partner from "../components/pages/Partner";
import Login from "../components/pages/Login";
import Register from "../components/pages/Register";
import Dashboard from "../components/pages/Dashboard";

export default (props) => (
  <Switch>
    <Route path="/home" component={Home} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/about" component={About} />
    <Route path="/login" component={Login} />
    <Route path="/Help" component={Help} />
    <Route path="/partner" component={Partner} />
    <Route path="/register" component={Register} />
    <Route from="*" component={Home} />
  </Switch>
);

