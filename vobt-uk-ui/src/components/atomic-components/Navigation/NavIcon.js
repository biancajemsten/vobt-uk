import React from "react";
import { withStyles } from "@material-ui/core";

const styles = theme => ({
  navIcon: {
    width: "24px",
    height: "24px",
    transition: "1s ease-in-out",
    cursor: "pointer",
    position: "relative"
  },
  navNotActive: {
    "& >:nth-child(1)": {
      top: "2px"
    },
    "& >:nth-child(2), & >:nth-child(3)": {
      top: "11px"
    },
    "& >:nth-child(4)": {
      top: "20px"
    }
  },
  navBar: {
    transition: "0.5s ease-in-out",
    display: "block",
    position: "absolute",
    height: "2px",
    width: "100%",
    backgroundColor: theme.palette.secondary.main,
    opacity: 1,
    left: 0,
    top: "-5px"
  },
  navActive: {
    "& >:nth-child(1), & >:nth-child(4)": {
      top: "5px",
      width: "0%",
      left: "50%"
    },
    "& >:nth-child(2)": {
      "-webkit-transform": "rotate(45deg)",
      transform: "rotate(45deg)",
      top: "11px"
    },
    "& >:nth-child(3)": {
      "-webkit-transform": "rotate(-45deg)",
      transform: "rotate(-45deg)",
      top: "11px"
    }
  },
  navAction: {
    position: "absolute",
    left: "-12px",
    top: "-12px",
    width: "48px",
    height: "48px",
    appearance: "none",
    background: "none",
    border: "0",
    outline: "0",
    padding: "12px",
    cursor: "pointer"
    // "&:focus": {
    //   outline: `1px dashed ${theme.palette.primary.main}`
    // }
  },
  innerHeader: {
    position: "relative",
    height: "24px"
  }
});

// const getNavClass

const NavIcon = ({ classes, active, toggleNav }) => {
  function getNavClass() {
    console.log(classes, active);
    return active
      ? `${classes.navIcon} ${classes.navActive}`
      : `${classes.navIcon} ${classes.navNotActive}`;
  }
  return (
    <div className={classes.innerHeader}>
      <a href="#nav" className={classes.navAction} onClick={toggleNav}>
        <div className={getNavClass()}>
          <span className={classes.navBar}></span>
          <span className={classes.navBar}></span>
          <span className={classes.navBar}></span>
          <span className={classes.navBar}></span>
        </div>
      </a>
    </div>
  );
};

export default withStyles(styles)(NavIcon);
