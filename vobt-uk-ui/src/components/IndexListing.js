import React from "react";
import { withStyles, Typography } from "@material-ui/core";
import { CloudinaryContext } from "cloudinary-react";
const CLOUDINARY_NAME = process.env.REACT_APP_CLOUDINARY_NAME;

const styles = theme => ({
  listingContainer: {
    border: `2px solid ${theme.palette.secondary.main}`,
    height: "auto",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  textContainer: {
    padding: "5px"
  }
});

function IndexListing({ classes, listing }) {
  return (
    <div className={classes.listingContainer}>
      <CloudinaryContext cloudName={CLOUDINARY_NAME}>
        <img
          height="150px"
          width="200px"
          src="https://res.cloudinary.com/dqoq2cv7k/image/upload/q_auto/v1557071409/properties/collingham_1"
        />
      </CloudinaryContext>
      <div className={classes.textContainer}>
        <Typography variant="h6">{listing.name}</Typography>
        <Typography>{listing.description}</Typography>
      </div>
    </div>
  );
}

export default withStyles(styles)(IndexListing);
