import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Foot from "./components/layout/Foot";
import Landing from "./components/layout/Landing";
import Navbar from "./components/layout/Navbar";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <div>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </div>
          <Foot />
        </Router>
      </div>
    );
  }
}

export default App;
