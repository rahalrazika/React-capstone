import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import axios from 'axios';
import Product from './Product';
import { listProducts } from '../actions/productActions';
import Loading from './loading';
import banner from '../assets/banner.jpg';

const ProductsList = () => {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get('https://fakestoreapi.com/products')
      .catch((err) => err);
    dispatch(listProducts(response.data));
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
        {loading ? <Product /> : <Loading />}
      </div>
    </div>
  );
};

export default connect(null, { listProducts })(ProductsList);
