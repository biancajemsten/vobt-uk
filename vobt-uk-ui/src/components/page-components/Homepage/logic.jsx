import React from "react";
import View from "./view";

class Homepage extends React.Component {
  logHello() {
    console.log("Hi there");
  }
  render() {
    return <View hello={this.logHello} />;
  }
}
export default Homepage;
