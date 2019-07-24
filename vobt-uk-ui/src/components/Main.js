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
    margin: "0 auto",
    maxWidth: "768px",
    alignSelf: "center",
    padding: "5vh 10vw 0",
    "@media (max-width: 768px)": {
      padding: "2vh 2vw 0"
    }
  }
};

function Main({ classes }) {
  return (
    <div className={classes.main}>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/index" component={PropertiesIndex} />
      </Switch>
    </div>
  );
}

export default withStyles(styles)(Main);
