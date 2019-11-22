import React from "react";
import MobileNavItem from "./NavItem";
import { withStyles } from "@material-ui/styles";

const styles = theme => ({
  navContainer: {
    background: theme.palette.secondary.main,
    visibility: "hidden",
    position: "fixed",
    zIndex: "10",
    top: "72px",
    bottom: "0",
    left: "0",
    right: "0",
    transform: "translate3d(0,0,0)",
    transition: "all 0.2s ease-in-out",
    backfaceVisibility: "hidden",
    opacity: "0"
  },
  navContainerActive: {
    background: theme.palette.secondary.main,
    visibility: "visible",
    position: "fixed",
    zIndex: "10",
    top: "72px",
    bottom: "0",
    left: "0",
    right: "0",
    transform: "translate3d(0,0,0)",
    transition: "all 0.2s ease-in-out",
    backfaceVisibility: "hidden",
    opacity: "1"
  }
});

const MobileNavMenu = ({ classes, active, navItems }) => {
  function getNavClass() {
    return active ? `${classes.navContainerActive}` : `${classes.navContainer}`;
  }
  return (
    <nav role="navigation" className={getNavClass()}>
      <div>
        <ul id="menu">
          {navItems.map(i => (
            <MobileNavItem key={i.slug} item={i} />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default withStyles(styles)(MobileNavMenu);
