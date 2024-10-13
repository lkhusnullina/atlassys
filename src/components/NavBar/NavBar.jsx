import React from "react";
import "./NavBar.scss";
import { menuAll } from "../../constans";
import { useState } from 'react';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


  return (
    <>
    <button className="navbar__burger" onClick={toggleMenu}>
        <img src='/images/burger-menu.svg' alt='burger-menu'/>
    </button>
    <nav className={`navbar ${isMenuOpen ? 'navbar--open' : ''}`} >
      <div className="navbar__logo">
        <img src="/images/logo.svg" alt="logo" />
      </div>
      <div className="navbar__menu">
        {menuAll.map((item) => (
          <button
            className={`navbar__item ${
              item.active ? "navbar__item--active" : ""
            }`}
            key={item.id}
          >
            <img
              className="navbar__icon"
              src={item.imgLogo}
              alt={item.itemMenu}
            />
            <span>{item.itemMenu}</span>
          </button>
        ))}
      </div>
    </nav>
    </>
  );
};

export default NavBar;

