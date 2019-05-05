import jwt_decode from "jwt-decode";
import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { logoutUser, setCurrentUser } from "./actions/authenticationActions";
import "./App.css";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Foot from "./components/layout/Foot";
import Landing from "./components/layout/Landing";
import Navbar from "./components/layout/Navbar";
import store from "./store";
import setAuthenticationToken from "./utils/setAuthenticationToken";

//Check token every request
if (localStorage.jwtToken) {
  //Set authentication token
  setAuthenticationToken(localStorage.jwtToken);
  //Decode to get the token exp && information
  const decoded = jwt_decode(localStorage.jwtToken);
  //Set the user && isAuthenticated to True
  store.dispatch(setCurrentUser(decoded));

  //Check for expired tokens
  const currentTime = Date.now / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    //Clear Current Profile & Redirect to Login Page
    window.location.href = "/login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <div>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </div>
          <Foot />
        </Router>
      </Provider>
    );
  }
}

export default App;
