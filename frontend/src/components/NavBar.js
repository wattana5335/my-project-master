import React from 'react';
import '../styles/NavBar.css';


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Ford_logo_flat.svg" alt="Ford Logo" />
      </div>
      <div className="navbar-right">
        <i className="bell-icon">🔔</i>
        <span className="language-switch">🌐 EN</span>
        <span className="login">LOGIN</span>
      </div>
    </div>
  );
};

export default Navbar;
