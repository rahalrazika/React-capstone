import React from 'react';
import { useSelector } from 'react-redux';

const Product = () => {
  const products = useSelector((state) => state.listOfProduct.products);
  // const { title } = products[0];
  console.log(products);
  return (
    <div className="d-flex">
      <div className="productContainer">
        <div className="product">
          <div className="image" />
          <div className="description">
            <h1>hi</h1>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Product;
