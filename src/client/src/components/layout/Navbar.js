import { Col, Row } from "antd";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <Row>
          <Col span={8}>
            <Col span={8}>
              <Link to="/">Student Portal</Link>
            </Col>
          </Col>
          <Col span={8} offset={8}>
            <Row type="flex" justify="end">
              <Col span={4}>
                <Link to="/login">Login</Link>
              </Col>
              <Col span={4}>
                <Link to="/register">Register</Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}
export default Navbar;
