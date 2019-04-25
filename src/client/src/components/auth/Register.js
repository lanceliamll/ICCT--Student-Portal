import { Button, TextField } from "@material-ui/core";
import React, { Component } from "react";
import "./Register.css";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      schoolId: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      password2: ""
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const {
      schoolId,
      firstName,
      lastName,
      email,
      password,
      password2
    } = this.state;
    const newUser = {
      schoolId,
      firstName,
      lastName,
      email,
      password,
      password2
    };

    console.log(newUser);
  };

  render() {
    return (
      <div className="register-main">
        <div className="register-container">
          <h1>Register</h1>
          <form>
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
                label="First Name"
                margin="normal"
                variant="outlined"
                name="firstName"
                value={this.state.firstName}
                onChange={this.onChange}
              />
            </div>
            <div>
              <TextField
                id="outlined-name"
                label="Last Name"
                margin="normal"
                variant="outlined"
                name="lastName"
                value={this.state.lastName}
                onChange={this.onChange}
              />
            </div>
            <div>
              <TextField
                id="outlined-name"
                label="Email"
                margin="normal"
                variant="outlined"
                name="email"
                value={this.state.email}
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
              <TextField
                id="outlined-name"
                label="Confirm Password"
                margin="normal"
                variant="outlined"
                name="password2"
                value={this.state.password2}
                onChange={this.onChange}
              />
            </div>
            <div>
              <Button
                onClick={this.onSubmit}
                variant="contained"
                color="primary"
                type="submit"
              >
                Register
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
