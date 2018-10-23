import React, { Component } from "react";
import "./Navbar.css";

export class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonPressed: false
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({ buttonPressed: !this.state.buttonPressed });
  }

  render() {
    let navtoggle = this.state.buttonPressed ? (
      <div className="navbarblocklist">
        <button onClick={this.onClick}>&#x2630;</button>
        <span className="toplist">SERVICES</span>
        <span className="toplist">PORTFOLIO</span>
        <span className="toplist">ABOUT</span>
        <span className="toplist">TEAM</span>
        <span className="toplist">CONTACT</span>
      </div>
    ) : (
      <div className="navbarblock">
        <button onClick={this.onClick}>&#x2630;</button>
        <span className="top">SERVICES</span>
        <span className="top">PORTFOLIO</span>
        <span className="top">ABOUT</span>
        <span className="top">TEAM</span>
        <span className="top">CONTACT</span>
      </div>
    );

    return (
      // <div className="outter">
      <div className="navbar">
        <div className="title">Start Bootstrap</div>
        {navtoggle}
      </div>
      // <div>
    );
  }
}

export default Navbar;
