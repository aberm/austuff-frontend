import React from "react";
import { NavLink } from "react-router-dom";

const Nav = props => {
  return (
    <div className="nav">
      <h2>Links</h2>
      <ul>
        <li>
          <h3>
            <NavLink to="/shop">Shop</NavLink>
          </h3>
        </li>
        <li>
          <h3>
            <NavLink to="/signup">Signup</NavLink>
          </h3>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
