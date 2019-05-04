import React from "react";
import { Button, withStyles } from "@material-ui/core";
import { light } from "@material-ui/core/styles/createPalette";

const styles = theme => ({
  headerButton: {
    "&:hover": {
      color: theme.palette.secondary.light,
      backgroundColor: "transparent"
    },
    borderRadius: 0,
    padding: theme.spacing * 2,
    color: theme.palette.secondary.main
  }
});

function HeaderButton({ children, onClick, classes }) {
  return (
    <Button
      className={classes.headerButton}
      disableRipple={true}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

export default withStyles(styles)(HeaderButton);
