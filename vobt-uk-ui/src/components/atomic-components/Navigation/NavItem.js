import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

const MobileNavItem = ({ item }) => {
  function navigate(newLocation) {
    this.props.history.push(newLocation);
  }
  return (
    <Link to={item.slug}>
      <li
        onClick={e => {
          e.preventDefault();
          navigate(item.slug);
        }}
      >
        {item.name}
      </li>
    </Link>
  );
};

export default withRouter(MobileNavItem);
