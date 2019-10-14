import React from "react";
import { withStyles, Grid, Typography } from "@material-ui/core";
import Instagram from "@material-ui/icons/Instagram";
import MailIcon from "@material-ui/icons/Mail";
const styles = theme => ({
  footerContainer: {
    backgroundColor: theme.palette.secondary.main,
    padding: "20px",
    position: "absolute",
    bottom: 0,
    width: "100vw",
    height: "140px",
    boxSizing: "border-box"
  },
  socialIcon: {
    color: theme.palette.primary.light,
    margin: "5px"
  },
  footerText: {
    color: theme.palette.primary.light
  }
});

const Footer = ({ classes }) => (
  <div className={classes.footerContainer}>
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid item>
        <Typography className={classes.footerText}>VOB&T UK Ltd</Typography>
      </Grid>
      <Grid item>
        <Typography className={classes.footerText}>
          South Kensington LONDON, UK
        </Typography>
      </Grid>
      <Grid item>
        <Typography className={classes.footerText}>LONDON, UK</Typography>
      </Grid>
      <Grid item>
        <Instagram className={classes.socialIcon} />
        <MailIcon className={classes.socialIcon} />
      </Grid>
    </Grid>
  </div>
);

export default withStyles(styles)(Footer);
