import React, { Component } from "react";
import "./Navbar.css";

export class Navbar extends Component {
  render() {
    return (
      // <div className="outter">
      <div className="navbar">
        <div className="title">Start Bootstrap</div>
        <div className="navbarblock">
          <button>&#x2630;</button>
          <span className="top">SERVICES</span>
          <span className="top">PORTFOLIO</span>
          <span className="top">ABOUT</span>
          <span className="top">TEAM</span>
          <span className="top">CONTACT</span>
        </div>
      </div>
      // </div>
    );
  }
}

export default Navbar;
