import React from "react";
import { withStyles, Typography } from "@material-ui/core";
import { CloudinaryContext } from "cloudinary-react";
const CLOUDINARY_NAME = process.env.REACT_APP_CLOUDINARY_NAME;

const styles = theme => ({
  aboutWrapper: {
    width: "100vw",
    padding: "40px 20px",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "row",
    "@media (max-width: 768px)": {
      // flexDirection: "column"
    },
    justifyContent: "center",
    "& header": {
      width: "100%",
      textAlign: "center"
    },
    "& img": {
      maxWidth: "40vw"
    }
  },
  contentWrapper: {
    display: "flex",
    flexDirection: "column",
    padding: "0 20px",
    width: "600px",
    "& p": {
      marginBottom: "20px"
    },
    "& h3": {
      color: theme.palette.secondary.main,
      fontSize: "1.5rem"
    }
  },
  pageNav: {
    color: theme.palette.secondary.main,
    letterSpacing: "2px",
    marginBottom: "20px",
    "& a": {
      textDecoration: "none",
      color: "inherit"
    }
  }
});

function AboutView({ classes }) {
  return (
    <CloudinaryContext cloudName={CLOUDINARY_NAME}>
      <div className={classes.aboutWrapper}>
        <img src="https://res.cloudinary.com/dqoq2cv7k/image/upload/q_auto/v1557071409/about/olivia" />
        <div className={classes.contentWrapper}>
          <header className={classes.pageNav}>
            <a href="#property-development">Property Development </a>|
            <a href="#exclusive-search-agency"> Exclusive Search Agency </a>|
            <a href="#interior-design"> Interior Design</a>
          </header>
          <Typography variant="body1">
            Just a text box where I would like add a description of who I am,
            what the company does and a professional picture of me next to it.
            Just a text box where I would like add a description of who I am,
            what the company does and a professional picture of me next to it
            Just a text box where I would like add a description of who I am,
            what the company does and a professional picture of me next to it
          </Typography>
          <Typography variant="h3" id="property-development">
            Property Development
          </Typography>
          <Typography variant="body1">
            Just a text box where I would like add a description of who I am,
            what the company does and a professional picture of me next to it.
            Just a text box where I would like add a description of who I am,
            what the company does and a professional picture of me next to it
            Just a text box where I would like add a description of who I am,
            what the company does and a professional picture of me next to it
          </Typography>
          <Typography variant="h3" id="exclusive-search-agency">
            Exclusive Search Agency
          </Typography>
          <Typography variant="body1">
            Just a text box where I would like add a description of who I am,
            what the company does and a professional picture of me next to it.
            Just a text box where I would like add a description of who I am,
            what the company does and a professional picture of me next to it
            Just a text box where I would like add a description of who I am,
            what the company does and a professional picture of me next to it
          </Typography>
          <Typography variant="h3" id="interior-design">
            Interior Design
          </Typography>
          <Typography variant="body1">
            Just a text box where I would like add a description of who I am,
            what the company does and a professional picture of me next to it.
            Just a text box where I would like add a description of who I am,
            what the company does and a professional picture of me next to it
            Just a text box where I would like add a description of who I am,
            what the company does and a professional picture of me next to it
          </Typography>
        </div>
      </div>
    </CloudinaryContext>
  );
}

export default withStyles(styles)(AboutView);
