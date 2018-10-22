import React, { Component } from "react";
import "./Home.css";

export class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="homeheader">Welcome To Our Studio!</div>
        <span>IT'S NICE TO MEET YOU</span>
        <button>TELL ME MORE</button>
      </div>
    );
  }
}

export default Home;
