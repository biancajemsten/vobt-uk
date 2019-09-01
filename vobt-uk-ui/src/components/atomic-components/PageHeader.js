import React from "react";
import { withStyles, Typography } from "@material-ui/core";

const styles = theme => ({
  heading: {
    margin: "10px 0",
    width: "100%"
  }
});

function PageHeader({ classes, title }) {
  return (
    <Typography className={classes.heading} variant="h4" component="h1">
      {title}
    </Typography>
  );
}

export default withStyles(styles)(PageHeader);
