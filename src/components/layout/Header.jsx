import React from "react";
import logo from "../../assets/images/logo.svg";
import "../../Style/App.scss";
import Nav from "../molecule/Nav";
import Modale from "../molecule/Modale";
import { useMediaQuery } from "react-responsive";

function Header() {
  const mobileMediaQuery = useMediaQuery({ query: "(max-width: 375px)" });
  

  

  return mobileMediaQuery ? (
    <header className="header">
      <img src={logo} alt="logo" title="logo" className="logo" />
      <Modale  />
    </header>
  ) : (
    <header className="header">
      <nav className="left">
        <img src={logo} alt="logo" title="logo" className="logo" />
        <ul>
          <Nav />
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
