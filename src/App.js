import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Writings from './components/Writings/Writings';
import SingleWriting from './components/SingleWriting/SingleWriting';
import Reading from './components/Reading/Reading';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import './Foundation.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App grid-container">
      {/* passing down the NavLink to NavRight through Nav */}
      <Nav />
      <Route exact path="/" component= {Home} />
      <Route path="/writings" component= {Writings} />
      <Route path="/blog/:slug" component= {SingleWriting} />           
      <Route path="/reading" component= {Reading} />
      <Route path="/about" component= {About} />      
      <Route path="/contact" component= {Contact} />      
      <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
