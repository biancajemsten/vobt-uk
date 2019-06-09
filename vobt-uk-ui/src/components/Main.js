import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./page-components/Homepage";
import PropertiesIndex from "./page-components/PropertiesIndex";
function Main() {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/index" component={PropertiesIndex} />
    </Switch>
  );
}

export default Main;
