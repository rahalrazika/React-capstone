import React from 'react';
import { Link } from 'react-router-dom';
import '../style/navBar.css';
import SearchIcon from '@material-ui/icons/Search';

const NavBar = () => (
  <nav className="navbar">

    <Link to="/">
      <img
        className="navbar-logo"
        src="https://static.vecteezy.com/system/resources/previews/002/114/693/original/online-shop-logo-template-design-illustration-vector.jpg"
        alt="logo"
      />
    </Link>
    <div className="nav-search">
      <input className="search-input" />
      <SearchIcon className="nav-search-icon" />
    </div>

    <div className="nav-links-container">
      <Link to="/" className="nav-links">
        <div className="nav-options">
          <span className="text-one">Return</span>
          <span className="text-two">Home</span>
        </div>
      </Link>
    </div>

  </nav>
);
export default NavBar;
