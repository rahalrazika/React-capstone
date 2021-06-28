import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Product = () => {
  const products = useSelector((state) => state.listOfProduct.products);
  const list = products.map((product) => {
    const {
      id, title, price, image, category,
    } = product;
    return (
      <div className="container d-flex" key={id}>
        <Link to={`/product/${id}`}>
          <div className="productContainer">
            <div className="product">
              <div className="image">
                <img src={image} alt={title} />
              </div>
              <div className="description">
                <div className="title">{title}</div>
                <div className="price">{price}</div>
                <div className="category">{category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return (
    <>
      {list}
    </>
  );
};

export default Product;
