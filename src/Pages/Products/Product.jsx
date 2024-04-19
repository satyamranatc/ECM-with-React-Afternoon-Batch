import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import "./Product.css"

export default function Product() {
  let [Allproducts, setAllProducts] = useState([]);
  let [Filteredproducts, setFilteredProducts] = useState([]);

  let GetProductData = async () => {
    let data = await fetch("https://api.escuelajs.co/api/v1/products");
    data = await data.json();
    setAllProducts(data);
    setFilteredProducts(data);
  }

  useEffect(() => {
    GetProductData();
   
  }, []);

  function CahngeCategory(cat)
  {

    setFilteredProducts(Allproducts.filter((e)=>e.category.name === cat));
  }

  return (
    <div>
      <center>
        <h1>Product</h1>
        <button onClick={()=>CahngeCategory("Electronics")}>Electronics</button>
        <button onClick={()=>CahngeCategory("Clothes")}>Cloths</button>
        <hr />
        <div id="Cards">
        {Filteredproducts.map((product, index) => (
          console.log(product),
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
