import React from 'react';
import "./ProductCard.css";

const ProductCard = ({ title, price, image }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <div className="product-details">
        <h3 className="product-title">{title}</h3>
        <p className="product-price">${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
