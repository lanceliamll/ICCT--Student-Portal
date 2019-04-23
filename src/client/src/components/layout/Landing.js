import { Button, Col, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import icctLogo from "../../static/icct-img.png";
import "./Landing.css";

export default function Landing() {
  return (
    <div className="main-container">
      <Row type="flex" justify="center" className="landing-design">
        <Col span={8}>
          <h1>Students Portal</h1>
          <p>
            Student Portal for the IT Students of ICCT Colleges. This will help
            them to achieve the ease of computing and storing grades.
          </p>
          <Button>
            <Link to="/login">Login</Link>
          </Button>
          <Button>
            <Link to="/register">Register</Link>
          </Button>
        </Col>
        <Col span={4} offset={4}>
          <div className="logo">
            <img src={icctLogo} height="100%" width="100%" alt="ICCT LOGO" />
            <p>
              ICCT Colleges Foundation Inc., is a tertiary education provider
              with campuses located mainly in the Province of Rizal,
              Philippines. In Rizal it has campuses in the municipalities of
              Cainta, Sumulong Hi-way, San Mateo, Cogeo, Antipolo, Taytay,
              Binangonan and Angono.
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
}
