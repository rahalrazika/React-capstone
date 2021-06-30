import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../style/navBar.css';
import SearchIcon from '@material-ui/icons/Search';
import { connect } from 'react-redux';
import { filterProducts } from '../actions/productActions';

const NavBar = ({ filterProducts, allProducts }) => {
  const [search, setSearch] = useState('');

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
        <SearchIcon
          className="nav-search-icon"
          onClick={() => filterProducts(allProducts, search)}
        />
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
NavBar.propTypes = {
  filterProducts: PropTypes.func,
  allProducts: PropTypes.instanceOf(Array),
};

NavBar.defaultProps = {
  filterProducts: null,
  allProducts: [],
};
const mapStateToProps = (state) => ({
  allProducts: state.listOfProduct.products,
});

export default connect(mapStateToProps, { filterProducts })(NavBar);
