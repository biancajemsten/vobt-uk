import React from "react";
import IndexListing from "../../IndexListing";
import { Typography, withStyles } from "@material-ui/core";

const styles = theme => ({
  indexContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column"
  },
  heading: {
    marginBottom: "10px"
  }
});

const mockListing = {
  name: "Collingham Place",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
};

function PropertiesIndexView({ classes }) {
  return (
    <div className={classes.indexContainer}>
      <Typography className={classes.heading} variant="h4" component="h1">
        Properties
      </Typography>
      <IndexListing listing={mockListing} />
    </div>
  );
}

export default withStyles(styles)(PropertiesIndexView);
