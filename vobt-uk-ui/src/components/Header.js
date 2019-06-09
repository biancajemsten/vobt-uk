import React from "react";
import { Grid, withStyles } from "@material-ui/core";
import HeaderButton from "./atomic-components/Buttons/HeaderButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import IconButton from "@material-ui/core/IconButton";

const styles = theme => ({
  headerContainer: {
    padding: "20px",
    borderBottom: `1px solid ${theme.palette.secondary.main}`,
    position: "sticky"
  },
  headerContainerMobile: {
    position: "relative",
    borderBottom: `1px solid ${theme.palette.secondary.main}`,
    height: "70px"
  }
});

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth
    };
  }

  componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }
  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };
  render() {
    const { classes } = this.props;
    const { width } = this.state;
    const isMobile = width <= 500;

    if (isMobile) {
      return (
        <div className={classes.headerContainerMobile}>
          <nav role="navigation">
            <div id="menuToggle">
              <input type="checkbox" />

              <span />
              <span />
              <span />

              <ul id="menu">
                <a href="#">
                  <li>Home</li>
                </a>
                <a href="#">
                  <li>About</li>
                </a>
                <a href="#">
                  <li>Info</li>
                </a>
                <a href="#">
                  <li>Contact</li>
                </a>
                <a href="https://erikterwan.com/" target="_blank">
                  <li>Show me more</li>
                </a>
              </ul>
            </div>
          </nav>
        </div>
      );
    } else {
      return (
        <div className={classes.headerContainer}>
          <Grid
            container
            alignContent="center"
            justify="flex-end"
            alignItems="flex-end"
          >
            <Grid
              container
              justify="center"
              alignItems="center"
              item
              xs={2}
              s={1}
            >
              <HeaderButton>Home</HeaderButton>
            </Grid>
            <Grid
              container
              justify="center"
              alignItems="center"
              item
              xs={2}
              s={1}
            >
              <HeaderButton>Properties</HeaderButton>
            </Grid>
            <Grid
              container
              justify="center"
              alignItems="center"
              item
              xs={2}
              s={1}
            >
              <HeaderButton>Services</HeaderButton>
            </Grid>
            <Grid
              container
              justify="center"
              alignItems="center"
              item
              xs={2}
              s={1}
            >
              <HeaderButton>About Us</HeaderButton>
            </Grid>
            <Grid
              container
              justify="center"
              alignItems="center"
              item
              xs={2}
              s={1}
            >
              <HeaderButton>Contact</HeaderButton>
            </Grid>
          </Grid>
        </div>
      );
    }
  }
}

export default withStyles(styles)(Header);
