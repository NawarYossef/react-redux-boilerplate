import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../styles/Header.css';

class Header extends Component {
  render() {
    const links = [
      <Link to="/home">
        Home
      </Link>,
      <Link to="/about">
        about
      </Link>,
      <Link to="/contacts">
        Contacts
      </Link>
    ];
    return (
      <section className={"header-wrapper"}>
        <header className={"app-title-wrapper"}>
          <h1 className="App-title">My-App</h1>
          <nav>
            <ul>
              {links.map((link, idx) => {
                return (
                  <li key={idx.toString()} className="link">
                    {link}
                  </li>
                );
              })}
            </ul>
          </nav>
        </header>
      </section>
    );
  }
}

export default Header;
