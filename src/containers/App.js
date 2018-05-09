import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "../components/Header"
import LandingPage from "./LandingPage"
import Contacts from "./Contacts"
import About from "./About"
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <Switch>
            <Route exact path="/home" component={LandingPage} />
            <Route path="/about" component={About} />
            <Route path="/contacts" component={Contacts} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
