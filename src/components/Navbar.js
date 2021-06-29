import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/navBar.css';
import SearchIcon from '@material-ui/icons/Search';
import { connect } from 'react-redux';
// import { filterProducts } from '../actions/productActions';

const NavBar = () => {
  const [search, setSearch] = useState('');
  console.log(search);
  console.log();
  return (
    <nav className="navbar">
      <Link to="/">
        <img
          className="navbar-logo"
          src="https://static.vecteezy.com/system/resources/previews/002/114/693/original/online-shop-logo-template-design-illustration-vector.jpg"
          alt="logo"
        />
      </Link>
      <div className="nav-search">
        <input
          className="search-input"
          onChange={(e) => setSearch(e.target.value)}
        />
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
};

const mapStateToProps = (state) => console.log(state.listOfProduct.products);

export default connect(mapStateToProps)(NavBar);
