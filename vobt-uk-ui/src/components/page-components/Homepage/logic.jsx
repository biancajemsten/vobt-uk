import React from "react";
import View from "./view";

class Homepage extends React.Component {
  logHello() {
    console.log("Hi there");
  }
  render() {
    const imageArray = [
      "https://res.cloudinary.com/dqoq2cv7k/image/upload/q_auto/v1557071409/properties/collingham_1",
      "https://res.cloudinary.com/dqoq2cv7k/image/upload/q_auto/v1557071409/properties/collingham_2",
      "https://res.cloudinary.com/dqoq2cv7k/image/upload/q_auto/v1557071409/properties/collingham_3",
      "https://res.cloudinary.com/dqoq2cv7k/image/upload/q_auto/v1557071409/properties/collingham_4"
    ];
    return <View imageArray={imageArray} hello={this.logHello} />;
  }
}
export default Homepage;
