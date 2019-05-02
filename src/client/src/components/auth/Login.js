import { Button, TextField } from "@material-ui/core";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authenticationActions";
import "./Login.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      schoolId: "",
      password: "",
      errors: {}
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.authentication.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const { schoolId, password } = this.state;
    const loginData = {
      schoolId,
      password
    };

    this.props.loginUser(loginData);
  };

  render() {
    const { errors } = this.state;
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
              {errors.schoolId && <p>{errors.schoolId}</p>}
            </div>
            <div>
              <TextField
                type="password"
                id="outlined-name"
                label="Password"
                margin="normal"
                variant="outlined"
                name="password"
                value={this.state.password}
                onChange={this.onChange}
              />
              {errors.password && <p>{errors.password}</p>}
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

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  errors: PropTypes.object
};

const mapStateToProps = state => ({
  errors: state.errors,
  authentication: state.authentication
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
