import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./page-components/Homepage";
import PropertiesIndex from "./page-components/PropertiesIndex";
import { withStyles } from "@material-ui/core";

const styles = {
  main: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
    margin: "100px auto 140px",
    "@media (max-width: 768px)": {
      margin: "0px auto 140px"
    },
    alignSelf: "center"
  }
};

function Main({ classes, header }) {
  return (
    <div className={classes.main}>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/properties" component={PropertiesIndex} />
      </Switch>
    </div>
  );
}

export default withStyles(styles)(Main);
