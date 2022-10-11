import React from "react";
import logo from "../../assets/images/logo.svg";
import "../../Style/App.scss";
import Nav from "../molecule/Nav";



function Header() {
 
 return (
    <header className="header">
      <nav className="left">
        <img src={logo} alt="logo" title="logo" className="logo" />
        <ul>
          <Nav  />
        </ul>
      </nav>

      <div className="add">
        <button className="login">Login</button>
        <button className="register">Register</button>
      </div>
    </header>
  );
}

export default Header;
