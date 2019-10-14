import React from "react";
import IndexListing from "../../IndexListing";
import { withStyles } from "@material-ui/core";

const styles = () => ({
  indexWrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
    padding: "40px 20px",
    boxSizing: "border-box"
  },

  listMargin: {
    flex: "0 1 calc(33% - 2em)",
    margin: "1em",
    "@media (max-width: 768px)": {
      flex: "0 1 calc(50% - 1em)",
      margin: "0.5em"
    },
    "@media (max-width: 480px)": {
      flex: "1 0 calc(100% - 1em)"
    }
  },
  indexContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    justifyContent: "flex-start"
  }
});

const mockListing = {
  name: "Collingham Place",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
};

const mockLIstings = [
  mockListing,
  mockListing,
  mockListing,
  mockListing,
  mockListing,
  mockListing,
  mockListing,
  mockListing
];

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
