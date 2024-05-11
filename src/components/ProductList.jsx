// src/components/ProductList.jsx
import React from 'react';
import Product from './Product';

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      <h2 className="title">Top Products</h2>
      <div className="grid-container">
        {products.map((product, index) => (
          <Product key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
