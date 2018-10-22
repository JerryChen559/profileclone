import React, { Component } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Team from "./components/Team";
import Contact from "./components/Contact";

class App extends Component {
  render() {
    return (
      <div className="app_container">
        <div />
        <Navbar />
        <Home />
        <Services />
        <Portfolio />
        <About />
        <Team />
        <Contact />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
