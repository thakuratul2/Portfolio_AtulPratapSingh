import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <a href="#" className="logo">
        Atul Pratap Singh
      </a>
      <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#offer">Offers</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
