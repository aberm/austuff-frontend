import React from "react";
import Login from "../components/Login";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <Link to="/shop">
          <img id="logo" alt="austuff" src={require("../assets/logo.jpg")} />
        </Link>
        <Login />
      </div>
    );
  }
}

export default Header;
