import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Product = () => {
  const products = useSelector((state) => state.listOfProduct.products);
  const list = products.map((product) => {
    const { id, title, price, image, category } = product;
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
  });
  return <>{list}</>;
};

export default Product;
