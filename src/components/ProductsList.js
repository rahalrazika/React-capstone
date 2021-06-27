import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import Product from './Product';
import { listProducts } from '../actions/productActions';

const ProductsList = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get('https://fakestoreapi.com/products')
      .catch((err) => {
        console.log('Err: ', err);
      });
    dispatch(listProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  console.log('products:', products);
  return (
    <div className="productContainer">
      <Product />
    </div>
  );
};

export default ProductsList;
