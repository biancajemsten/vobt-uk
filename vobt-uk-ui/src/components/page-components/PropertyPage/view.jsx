import React from "react";
import { withStyles } from "@material-ui/core";
import { CloudinaryContext } from "cloudinary-react";
const CLOUDINARY_NAME = process.env.REACT_APP_CLOUDINARY_NAME;

const styles = () => ({
  propertyPageWrapper: {
    width: "100%",
    padding: "40px 20px",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "row",
    "@media (max-width: 768px)": {
      flexDirection: "column"
    },
    width: "100%",
    justifyContent: "center"
  }
});

function PropertyPageView({ classes }) {
  return (
    <CloudinaryContext cloudName={CLOUDINARY_NAME}>
      <div className={classes.propertyPageWrapper}>
        <div className={classes.house} />
      </div>
    </CloudinaryContext>
  );
}

export default withStyles(styles)(PropertyPageView);
