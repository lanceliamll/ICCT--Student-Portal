import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";

export default function Landing() {
  return (
    <div className="main-container">
      <div className="center-container">
        <h1 className="welcome-text">Welcome to ICCT Students Portal</h1>
        <div className="welcome-button">
          <Button variant="contained" color="primary">
            <Link className="text-decoration" color="primary" to="/login">
              Login
            </Link>
          </Button>

          <Button variant="contained" color="primary">
            <Link className="text-decoration" to="/register">
              Register
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
