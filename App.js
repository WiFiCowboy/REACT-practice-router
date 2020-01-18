import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import "./App.css";

export default class App extends Component{
  render(){
    return(
      <Router>
        <div>
        <Nav/>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
      </div>
      </Router>
    )
  }
}
