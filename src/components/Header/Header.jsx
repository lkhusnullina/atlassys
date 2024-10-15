import React from 'react';
import './Header.scss';

const Header = () => {
    
    return (
        <header className="header">
        <h1 className="header__title">Setting</h1>
        <div className="header__search">
          <img src="images/search-header.svg" alt="search" />
          <input
            type="search"
            className="header__search-input"
            placeholder="Search for something"
          />
        </div>
        <div className="header__icons">
          <button className="header__icon">
            <img className="icon-settings" src="images/settings-header.svg" alt="search"/>
          </button>
          <button className="header__icon">
            <img className="icon-notifications" src="images/notification-header.svg" alt="search"/>
          </button>
        </div>
        <div className="header__avatar">
            <img
              src="images/user-avatar.svg"
              alt="UserAvatar"
            />
        </div>
        <div className="header__search--mobile">
          <img src="images/search-header.svg" alt="search" />
          <input
            type="search"
            className="header__search-input--mobile"
            placeholder="Search for something"
          />
        </div>
      </header>
    );
  };
  
export default Header;