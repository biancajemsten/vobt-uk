import React from "react";
import { Button, withStyles } from "@material-ui/core";
import { light } from "@material-ui/core/styles/createPalette";
import { Link } from "react-router-dom";

const styles = theme => ({
  headerButton: {
    "&:hover": {
      color: theme.palette.secondary.light,
      backgroundColor: "transparent"
    },
    borderRadius: 0,
    padding: theme.spacing * 2,
    color: theme.palette.secondary.main,
    fontSize: "1.4em",
    letterSpacing: "0.06rem",
    "@media (max-width: 768px)": {
      fontSize: "1.2em"
    }
  },
  link: {
    textDecoration: "none",
    color: theme.palette.secondary.main
  }
});

function HeaderButton({ to, children, onClick, classes }) {
  return (
    <Button
      className={classes.headerButton}
      disableRipple={true}
      onClick={onClick}
    >
      <Link className={classes.link} to={to}>
        {children}
      </Link>
    </Button>
  );
}

export default withStyles(styles)(HeaderButton);
