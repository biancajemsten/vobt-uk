import React from "react";
import IndexListing from "../../IndexListing";
import { Typography, withStyles } from "@material-ui/core";
import PageHeader from "../../atomic-components/PageHeader";
const styles = theme => ({
  indexWrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
    padding: "40px 20px"
  },

  listMargin: {
    maxWidth: "30%",
    flex: "1 0 30%",
    marginBottom: "10px"
  },
  indexContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    justifyContent: "space-between"
  }
});

const mockListing = {
  name: "Collingham Place",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
};

const mockLIstings = [mockListing, mockListing, mockListing, mockListing];

function PropertiesIndexView({ classes }) {
  return (
    <div className={classes.indexWrapper}>
      <div className={classes.indexContainer}>
        {mockLIstings.map((listing, i) => (
          <div key={i} className={classes.listMargin}>
            <IndexListing listing={listing} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default withStyles(styles)(PropertiesIndexView);
