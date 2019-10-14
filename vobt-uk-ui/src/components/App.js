import React, { Component } from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core";
import Main from "./Main.js";
import Header from "./Header";
import Footer from "./Footer";
const styles = {
  body: {
    minHeight: "100vh",
    position: "relative",
    overflow: "hidden"
  }
};
const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 768,
      lg: 992,
      xl: 1200
    }
  },
  palette: {
    primary: {
      main: "#000000",
      light: "#FFFFFF"
    },
    secondary: { main: "#00066a", light: "#323787" }
  },
  typography: {
    fontSize: 12,
    useNextVariants: true,
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '"Helvetica Neue UltraLight"',
      '"Helvetica 35 Thin"',
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(",")
  }
});

class App extends Component {
  render() {
    const header = document.getElementById("headerContainer");
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <div className={classes.body}>
          <Header />
          <Main header={header} className={classes.main} />
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
