import axios from 'axios';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct } from '../actions/productActions';

const DetailPage = () => {
  const product = useSelector((state) => state.product);
  const {
    image, title, price, category, description,
  } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();
  console.log(product);

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log('Err: ', err);
      });
    dispatch(selectedProduct(response.data));
  };
  useEffect(() => {
    if (productId && productId !== '') fetchProductDetail();
  }, [productId]);
  return (

    <div className="">

      <img src={image} alt={title} />
      <div className="title">{title}</div>
      <div className="price">{price}</div>
      <div className="category">{category}</div>
      <div className="description">{description}</div>
    </div>

  );
};

export default DetailPage;
