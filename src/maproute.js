import { Switch, Route } from "react-router-dom";
import React from "react";
import Home from "./home";
import Movies from "./Movies";
import Series from "./Series";
import Error from "./error";

export default function Maproute() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/Movies" exact component={Movies}></Route>
        <Route path="/Series" exact component={Series}></Route>
        <Route path="*" exact={true} component={Error}></Route>
      </Switch>
    </div>
  );
}
