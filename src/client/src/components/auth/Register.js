import { Button, TextField } from "@material-ui/core";
import axios from "axios";
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
      password2: "",
      errors: {}
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

    axios
      .post("/api/user/register", newUser)
      .then(res => console.log(res.data))
      .catch(err => this.setState({ errors: err.response.data }));
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="register-main">
        <div className="register-container">
          <h1>Register</h1>
          <form noValidate onSubmit={this.onSubmit}>
            <div>
              <TextField
                label="School ID"
                margin="normal"
                variant="outlined"
                name="schoolId"
                value={this.state.schoolId}
                onChange={this.onChange}
              />
              {errors.schoolId && <p>{errors.schoolId}</p>}
            </div>
            <div>
              <TextField
                label="First Name"
                margin="normal"
                variant="outlined"
                name="firstName"
                value={this.state.firstName}
                onChange={this.onChange}
              />
              {errors.firstName && <p>{errors.firstName}</p>}
            </div>
            <div>
              <TextField
                label="Last Name"
                margin="normal"
                variant="outlined"
                name="lastName"
                value={this.state.lastName}
                onChange={this.onChange}
              />
              {errors.lastName && <p>{errors.lastName}</p>}
            </div>
            <div>
              <TextField
                label="Email"
                type="email"
                margin="normal"
                variant="outlined"
                name="email"
                value={this.state.email}
                onChange={this.onChange}
              />
              {errors.email && <p>{errors.email}</p>}
            </div>
            <div>
              <TextField
                label="Password"
                margin="normal"
                type="password"
                variant="outlined"
                name="password"
                value={this.state.password}
                onChange={this.onChange}
              />
              {errors.password && <p>{errors.password}</p>}
            </div>
            <div>
              <TextField
                label="Confirm Password"
                margin="normal"
                type="password"
                variant="outlined"
                name="password2"
                value={this.state.password2}
                onChange={this.onChange}
              />
              {errors.password2 && <p>{errors.password2}</p>}
            </div>
            <div>
              <Button variant="contained" color="primary" type="submit">
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
