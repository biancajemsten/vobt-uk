import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./page-components/Homepage";
function Main() {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
    </Switch>
  );
}

export default Main;
