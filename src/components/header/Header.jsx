import React from "react";
import Home from "../home/Home";
import "./Header.css";

const Header = () => {
  return (
    <>

   
    <header className="header">
      <a href="#" className="logo">
        Atul Pratap Singh
      </a>
      <i class='bx bx-menu' id="menu_icon"></i>
      <nav className="navbar_container">
        <a href="#home" className="active">Home</a>
        <a href="#about">About</a>
        <a href="#offer">My Skills</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
    </>
  );
};

export default Header;
