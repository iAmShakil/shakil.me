import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import ReactGA from 'react-ga';
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
    ReactGA.initialize('UA-120308567-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
    
    return (
      <Router>
      <div className="App grid-container">
      {/* passing down the NavLink to NavRight through Nav */}
      <Nav />
      <div style={ {flex: 1,} }>
      <Route exact path="/" component= {Home} />
      <Route path="/writings" component= {Writings} />
      <Route path="/blog/:slug" component= {SingleWriting} />           
      <Route path="/reading" component= {Reading} />
      <Route path="/about" component= {About} />      
      <Route path="/contact" component= {Contact} />
      </div>
      <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
