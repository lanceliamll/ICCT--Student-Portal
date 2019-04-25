import { Button, TextField } from "@material-ui/core";
import React, { Component } from "react";
import "./Login.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      schoolId: "",
      password: ""
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const { schoolId, password } = this.state;
    const login = {
      schoolId,
      password
    };

    console.log(login);
  };

  render() {
    return (
      <div className="login-main">
        <div className="login-container">
          <h1>Login</h1>
          <form onSubmit={this.onSubmit}>
            <div>
              <TextField
                id="outlined-name"
                label="School ID"
                margin="normal"
                variant="outlined"
                name="schoolId"
                value={this.state.schoolId}
                onChange={this.onChange}
              />
            </div>
            <div>
              <TextField
                id="outlined-name"
                label="Password"
                margin="normal"
                variant="outlined"
                name="password"
                value={this.state.password}
                onChange={this.onChange}
              />
            </div>
            <div>
              <Button variant="contained" color="primary" type="submit">
                Login
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
