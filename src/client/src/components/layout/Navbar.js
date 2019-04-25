import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
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
  render() {
    const { classes } = this.props;
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
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Navbar);
