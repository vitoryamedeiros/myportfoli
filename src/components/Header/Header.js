import React from "react";
import "./Header.css";

const Header = () => (
  <header>
    <nav>
      <ul className="ul">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#jobs">Jobs</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
    <img src="../../assets/header-estrela-branca.png" alt="Minha Figura"></img>
  </header>
);

export default Header;
