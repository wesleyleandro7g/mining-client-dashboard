import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from "./pages/login";
import Home from "./pages/home";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/home" component={Home} />
    </Switch>
  );
}
