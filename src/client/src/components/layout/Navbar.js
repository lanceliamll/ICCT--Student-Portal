import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../../actions/authenticationActions";
import icctLogo from "../../static/icct-logo.png";
import "./Navbar.css";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};
class Navbar extends React.Component {
  //Functions
  onUserLogout = event => {
    event.preventDefault();
    this.props.logoutUser();
    window.location.href = "/login";
  };

  render() {
    const { isAuthenticated, user } = this.props.authentication;
    const { classes } = this.props;

    //IsAdminLinks
    const adminLinks = (
      <Button color="inherit">
        <Link className="text-decoration" to="/enroll">
          Dashboard
        </Link>
      </Button>
    );

    //Authenticated Links
    const authenticatedLinks = (
      <div>
        {user.isAdmin ? adminLinks : null}
        <Button color="inherit">
          <Link className="text-decoration" to="/grades">
            Grades
          </Link>
        </Button>
        <Button color="inherit">
          <a className="text-decoration" to="" onClick={this.onUserLogout}>
            Logout
          </a>
        </Button>
      </div>
    );

    //Guest Links
    const guestLinks = (
      <div>
        <Button color="inherit">
          <Link className="text-decoration" to="/">
            Home
          </Link>
        </Button>
        <Button color="inherit">
          <Link className="text-decoration" to="/register">
            Register
          </Link>
        </Button>
        <Button color="inherit">
          <Link className="text-decoration" to="/login">
            Login
          </Link>
        </Button>
      </div>
    );

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              <Button color="inherit">
                <Link className="text-decoration" to="/">
                  <img
                    className="navbar-logo"
                    src={icctLogo}
                    alt="ICCT Student Portal"
                  />
                </Link>
              </Button>
            </Typography>
            {/* Navigation Buttons */}
            {isAuthenticated ? authenticatedLinks : guestLinks}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired,
  authentication: PropTypes.object.isRequired
};

const mapStateToprops = state => ({
  authentication: state.authentication
});

export default connect(
  mapStateToprops,
  { logoutUser }
)(withStyles(styles)(Navbar));
