import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from "./pages/login";
import Home from "./pages/home";
import Shopping from "./pages/shopping";
import Negotiations from "./pages/negotiations";
import Requests from "./pages/requests";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/home" component={Home} />
      <Route path="/compras" component={Shopping} />
      <Route path="/negociacoes" component={Negotiations} />
      <Route path="/pedidos" component={Requests} />
    </Switch>
  );
}
