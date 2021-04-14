import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <Link to="hello">
        <button>Hello world</button>{" "}
      </Link>
    </div>
  );
};

export default Menu;
