import React from "react";
import { Grid, withStyles } from "@material-ui/core";
import HeaderButton from "./atomic-components/Buttons/HeaderButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import IconButton from "@material-ui/core/IconButton";
import { CloudinaryContext } from "cloudinary-react";
import { Link } from "react-router-dom";
import NavIcon from "./atomic-components/Navigation/NavIcon";
import MobileNavMenu from "./atomic-components/Navigation/MobileNavMenu";
const CLOUDINARY_NAME = process.env.REACT_APP_CLOUDINARY_NAME;

const styles = theme => ({
  headerTop: {
    padding: "0 20px",
    borderBottom: `1px solid ${theme.palette.secondary.main}`
  },
  headerSticky: {
    backgroundColor: theme.palette.primary.light,
    position: "fixed",
    top: 0,
    width: "100%",
    padding: "0 20px",
    borderBottom: `1px solid ${theme.palette.secondary.main}`,
    zIndex: "2"
  },
  headerContainerMobile: {
    backgroundColor: theme.palette.primary.light,
    height: "70px",
    padding: "24px",
    position: "fixed",
    left: "0",
    top: "0",
    right: "0",
    zIndex: "10",
    borderBottom: `1px solid ${theme.palette.secondary.main}`
  },
  house: {
    height: "100px",
    width: "60%",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundImage:
      "url('https://res.cloudinary.com/dqoq2cv7k/image/upload/q_auto/v1557071409/logo/vobtukhouse')",
    "@media (max-width: 768px)": {
      height: "80px"
    }
  },
  logo: {
    height: "39px",
    width: "100%",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundImage:
      "url('https://res.cloudinary.com/dqoq2cv7k/image/upload/q_auto/v1557071409/logo/vobtuklogo')",
    "@media (max-width: 768px)": {
      height: "33px"
    }
  },
  link: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});

const navItems = [
  { name: "Home", slug: "/" },
  { name: "Properties", slug: "/properties" },
  { name: "About", slug: "/about" },
  { name: "Contact", slug: "/contact" }
];

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      active: false
    };
    this.toggleNav = this.toggleNav.bind(this);
  }

  pageTitles = ["Home", "Properties", "About", "Contact"];

  componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }
  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  toggleNav(e) {
    e.preventDefault();
    this.setState(state => ({
      active: !state.active
    }));
  }
  render() {
    const { classes } = this.props;
    const { width } = this.state;
    const isMobile = width <= 768;
    console.log(this.props);

    if (isMobile) {
      return (
        <>
          <header className={classes.headerContainerMobile}>
            <NavIcon active={this.state.active} toggleNav={this.toggleNav} />
          </header>
          <MobileNavMenu navItems={navItems} active={this.state.active} />
        </>
      );
    } else {
      return (
        <div id="headerContainer" className={classes.headerSticky}>
          <CloudinaryContext cloudName={CLOUDINARY_NAME}>
            <Grid
              container
              alignContent="center"
              justify="space-around"
              alignItems="center"
            >
              <Grid
                direction="row"
                container
                justify="center"
                alignItems="center"
                item
                xs={3}
                s={2}
              >
                <Link className={classes.link} to={"/"}>
                  <div className={classes.house} />
                  <div className={classes.logo} />
                </Link>
              </Grid>
              <Grid
                container
                justify="center"
                alignItems="center"
                item
                xs={2}
                s={1}
              >
                <HeaderButton to="/properties">Properties</HeaderButton>
              </Grid>

              <Grid
                container
                justify="center"
                alignItems="center"
                item
                xs={2}
                s={1}
              >
                <HeaderButton to="/about">About</HeaderButton>
              </Grid>
              <Grid
                container
                justify="center"
                alignItems="center"
                item
                xs={2}
                s={1}
              >
                <HeaderButton to={"/contact"}>Contact</HeaderButton>
              </Grid>
            </Grid>
          </CloudinaryContext>
        </div>
      );
    }
  }
}
export default withStyles(styles)(Header);
