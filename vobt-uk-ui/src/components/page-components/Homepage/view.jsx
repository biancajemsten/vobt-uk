import React from "react";
import { Button } from "@material-ui/core";

function HomepageView({ hello }) {
  return (
    <div>
      <Button onClick={hello}>A button</Button>
      <p>hi</p>
    </div>
  );
}

export default HomepageView;
