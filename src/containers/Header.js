import React from "react";
import Login from "../components/Login";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h1>Austuff</h1>
        <h2>Header</h2>
        <Login />
      </div>
    );
  }
}

export default Header;
