import { Button, TextField } from "@material-ui/core";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { registerUser } from "../../actions/authenticationActions";
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
  componentDidMount() {
    if (this.props.authentication.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
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
    const registerData = {
      schoolId,
      firstName,
      lastName,
      email,
      password,
      password2
    };

    this.props.registerUser(registerData, this.props.history);
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

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  errors: PropTypes.object,
  authentication: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors,
  authentication: state.authentication
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
