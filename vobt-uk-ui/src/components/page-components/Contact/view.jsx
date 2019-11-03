import React from "react";
import { withStyles } from "@material-ui/core";
import { CloudinaryContext } from "cloudinary-react";
const CLOUDINARY_NAME = process.env.REACT_APP_CLOUDINARY_NAME;

const styles = () => ({
  contactWrapper: {
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
  },
  house: {
    height: "400px",
    width: "300px",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundImage:
      "url('https://res.cloudinary.com/dqoq2cv7k/image/upload/q_auto/v1557071409/logo/vobtukhouse')"
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }
});

function ContactView({ classes }) {
  return (
    <CloudinaryContext cloudName={CLOUDINARY_NAME}>
      <div className={classes.contactWrapper}>
        <div className={classes.house} />
        <div className={classes.textContainer}>
          <p style={{ textDecoration: "underline" }}>VOB&T UK Ltd</p>
          <p>South Kensington</p>
          <p style={{ marginBottom: "40px" }}>LONDON, UK</p>
          <p>Telephone: + 44 (0) 757 052 5626</p>
          <p>WeChat ID: O917358</p>
          <p>E-mail: info@vobt.co.uk</p>
        </div>
      </div>
    </CloudinaryContext>
  );
}

export default withStyles(styles)(ContactView);
