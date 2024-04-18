import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import "./Product.css"

export default function Product() {
  let [Allproducts, setAllProducts] = useState([]);

  let GetProductData = async () => {
    let data = await fetch("https://api.escuelajs.co/api/v1/products");
    data = await data.json();
    setAllProducts(data);
  }

  useEffect(() => {
    GetProductData();
  }, []);

  return (
    <div>
      <center>
        <h1>Product</h1>
        <hr />
        <div id="Cards">
        {Allproducts.map((product, index) => (
          <ProductCard
            key={index}
            title={product.title}
            price={product.price}
            image={product.images[0]}
          />
        ))}
        </div>
      </center>
    </div>
  );
}
