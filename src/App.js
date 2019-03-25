import React, { Component } from "react";
import "./App.css";
import Header from "./containers/Header";
import Main from "./containers/Main";
import Nav from "./components/Nav";
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="background" />
          <div className="content" />
          <Header />
          <Main />
          <br />
          <Nav />
        </div>
      </Router>
    );
  }
}

export default App;
