import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
const styles = theme => ({
  listItem: {
    margin: "0 0 24px",
    padding: "0",
    opacity: "0",
    transform: "translateY(24px)",
    transition: "all 0.2 ease-out"
  },
  listItemActive: {
    margin: "0 0 24px",
    padding: "0",
    opacity: "1",
    transform: "translateY(0)",
    transition: "all 0.2 ease-out"
  },
  link: {
    fontSize: "32px",
    lineHeight: "32px",
    textDecoration: "none",
    // textTransform: 'uppercase'
    color: theme.palette.primary.light
  }
});

const MobileNavItem = ({
  classes,
  item,
  index,
  active,
  navItems,
  history,
  toggleNav
}) => {
  function navigate(newLocation) {
    history.push(newLocation);
  }

  function calculateDelay(i) {
    const time = active ? (navItems.length - i) / 18 : 0;
    return `${time}s`;
  }
  return (
    <li
      className={active ? classes.listItemActive : classes.listItem}
      style={{ transitionDelay: calculateDelay(index) }}
    >
      <Link
        className={classes.link}
        to={item.slug}
        onClick={e => {
          toggleNav(e);
          e.preventDefault();
          navigate(item.slug);
        }}
      >
        {item.name}
      </Link>
    </li>
  );
};

const styledNavItem = withStyles(styles)(MobileNavItem);
export default withRouter(styledNavItem);
