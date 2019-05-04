import React from "react";
import {
  Grid,
  AppBar,
  Toolbar,
  Typography,
  withStyles
} from "@material-ui/core";
import HeaderButton from "./atomic-components/Buttons/HeaderButton";

const styles = theme => ({
  headerContainer: {
    padding: "20px",
    borderBottom: `1px solid ${theme.palette.secondary.main}`,
    position: "sticky"
  }
});

function Header({ classes }) {
  return (
    <div className={classes.headerContainer}>
      <Grid
        container
        alignContent="center"
        justify="flex-end"
        alignItems="flex-end"
      >
        <Grid container justify="center" alignItems="center" item xs={2} s={1}>
          <HeaderButton>Home</HeaderButton>
        </Grid>
        <Grid container justify="center" alignItems="center" item xs={2} s={1}>
          <HeaderButton>Properties</HeaderButton>
        </Grid>
        <Grid container justify="center" alignItems="center" item xs={2} s={1}>
          <HeaderButton>Services</HeaderButton>
        </Grid>
        <Grid container justify="center" alignItems="center" item xs={2} s={1}>
          <HeaderButton>About Us</HeaderButton>
        </Grid>
        <Grid container justify="center" alignItems="center" item xs={2} s={1}>
          <HeaderButton>Contact</HeaderButton>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(Header);
