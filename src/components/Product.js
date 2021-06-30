/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ productData }) => {
  const {
    id, title, price, image, category,
  } = productData;
  return (
    <Link className="link" to={`/product/${id}`} key={id}>
      <div className="product">
        <img src={image} alt={title} />
        <div className="title">{title}</div>
        <div className="price">
          {price}
          <span>$</span>
        </div>
        <button type="button">{category}</button>
      </div>
    </Link>
  );
};

export default Product;
