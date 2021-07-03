import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import Product from './Product';
import { listProducts, filterProducts } from '../actions/productActions';
import Loading from '../components/loading';
import banner from '../assets/banner.jpg';

const ProductsList = (props) => {
  const { filteredProducts, filterProducts } = props;
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get('https://fakestoreapi.com/products')
      .catch((err) => err);
    dispatch(listProducts(response.data));
    filterProducts(response.data);
  };

  useEffect(() => {
    fetchProducts();
    setLoading(true);
  }, []);
  return (
    <div className="productContainer">
      <div className="banner">
        <img src={banner} alt="banner" />
      </div>
      <div className="container d-flex">
        {loading ? (
          filteredProducts.map((singleProduct) => (
            <Product key={singleProduct.id} productData={singleProduct} />
          ))
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};
ProductsList.propTypes = {
  filteredProducts: PropTypes.instanceOf(Array),
  filterProducts: PropTypes.func,

};

ProductsList.defaultProps = {
  filteredProducts: [],
  filterProducts: null,
};

const mapStateToProps = (state) => ({
  filteredProducts: state.listOfProduct.filteredProducts,
});

export default connect(mapStateToProps, { listProducts, filterProducts })(
  ProductsList,
);
