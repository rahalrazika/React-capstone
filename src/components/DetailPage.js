import axios from 'axios';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct, clearSelectedProduct } from '../actions/productActions';

const DetailPage = () => {
  const product = useSelector((state) => state.product);
  const {
    image, title, price, category, description,
  } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();
  const fetchProductDetail = async (id) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log('Err: ', err);
      });
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== '') fetchProductDetail(productId);
    return () => {
      dispatch(clearSelectedProduct());
    };
  }, [productId]);
  return (

    <div className="">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div>
          <img src={image} alt={title} />
          <div className="title">{title}</div>
          <div className="price">{price}</div>
          <div className="category">{category}</div>
          <div className="description">{description}</div>
        </div>

      )}
    </div>

  );
};

export default DetailPage;
