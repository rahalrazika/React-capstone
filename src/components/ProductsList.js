import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import Product from './Product';
import { listProducts } from '../actions/productActions';
import Loading from './loading';

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
      { loading ? <Product /> : <Loading />}
    </div>
  );
};

export default ProductsList;
