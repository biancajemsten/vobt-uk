import React from "react";
import { withStyles, Typography } from "@material-ui/core";
import { CloudinaryContext } from "cloudinary-react";
const CLOUDINARY_NAME = process.env.REACT_APP_CLOUDINARY_NAME;

const styles = theme => ({
  listingContainer: {
    border: `1px solid ${theme.palette.secondary.main}`,
    height: "auto",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    borderRadius: "40px",
    overflow: "hidden"
  },
  textContainer: {
    padding: "15px"
  }
});

function IndexListing({ classes, listing }) {
  return (
    <div className={classes.listingContainer}>
      <CloudinaryContext cloudName={CLOUDINARY_NAME}>
        <img
          object-fit="cover"
          height="100%"
          width="100%"
          src="https://res.cloudinary.com/dqoq2cv7k/image/upload/q_auto/v1557071409/properties/collingham_1"
        />
      </CloudinaryContext>
      <div className={classes.textContainer}>
        <Typography align="center" variant="h5">
          {listing.name}
        </Typography>
        <Typography>{listing.description}</Typography>
      </div>
    </div>
  );
}

export default withStyles(styles)(IndexListing);
