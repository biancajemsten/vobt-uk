import React, { Component } from "react";
import {
  MuiThemeProvider,
  createMuiTheme,
  withStyles
} from "@material-ui/core/styles";
import { Typography, Button } from "@material-ui/core";
import Main from "./Main.js";
import Header from "./Header";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#000000"
    },
    secondary: { main: "#00066a", light: "#323787" }
  },
  typography: {
    fontSize: 12,
    useNextVariants: true,
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
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
    const classes = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <Header />
        <Typography variant="h1">Hi</Typography>
        <Button color="secondary">hi</Button>
        <Main />
      </MuiThemeProvider>
    );
  }
}

export default App;
